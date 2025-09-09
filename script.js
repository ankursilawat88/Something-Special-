body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg,#ff9a9e,#fad0c4);
  color: #fff;
  text-align: center;
}

.page {
  display: none;
  padding: 50px;
}

.page.active {
  display: block;
}

button {
  padding: 10px 25px;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #fff;
  color: #ff4e50;
  font-weight: bold;
}

/* Letter Page Layout */
.letter-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 80%;
  margin: auto;
}

.letter-photos {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.letter-photos img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.letter-text-container {
  flex: 1;
  padding: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #fff;
  min-height: 300px;
}

#slideshow {
  width: 70%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}
