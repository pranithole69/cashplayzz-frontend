const axios = require('axios');

console.log("🚀 Sending login request...");

axios.post('http://localhost:5000/api/auth/login', {
  email: "customize.logo1@gmail.com",
  password: "Pranit5289"
})
.then(res => {
  console.log("✅ SUCCESS:", res.data);
})
.catch(err => {
  console.error("❌ ERROR:", err.response?.data || err.message);
});
