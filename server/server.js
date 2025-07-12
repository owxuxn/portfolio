const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// 포트폴리오 데이터 초기화
let portfolioData = {
  projects: [],
  skills: [],
  experience: [],
  lastUpdated: new Date()
};

// 초기 데이터 로드
function loadInitialData() {
  try {
    const dataPath = path.join(__dirname, '../shared/data.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      portfolioData = JSON.parse(data);
      portfolioData.lastUpdated = new Date();
      console.log('Initial data loaded successfully');
    } else {
      console.log('Data file not found, using default data');
    }
  } catch (error) {
    console.error('Error loading initial data:', error);
  }
}

// 서버 시작 시 초기 데이터 로드
loadInitialData();

// 파일 변경 감지 (데몬셋 역할)
const watcher = chokidar.watch(path.join(__dirname, '../shared/data.json'), {
  persistent: true
});

watcher.on('change', () => {
  try {
    const dataPath = path.join(__dirname, '../shared/data.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      const newData = JSON.parse(data);
      portfolioData = {
        ...newData,
        lastUpdated: new Date()
      };
      
      // 모든 클라이언트에게 업데이트 전송
      io.emit('portfolioUpdate', portfolioData);
      console.log('Portfolio data updated and broadcasted:', new Date().toLocaleString());
    }
  } catch (error) {
    console.error('Error reading data file:', error);
  }
});

// 에러 처리
watcher.on('error', (error) => {
  console.error('File watcher error:', error);
});

// Socket.IO 연결 처리
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // 초기 데이터 전송
  socket.emit('portfolioUpdate', portfolioData);
  
  socket.on('disconnect', (reason) => {
    console.log('Client disconnected:', socket.id, 'Reason:', reason);
  });
  
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// REST API 엔드포인트
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});