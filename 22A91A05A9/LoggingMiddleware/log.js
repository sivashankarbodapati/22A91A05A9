
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmE5MWEwNWE5QGFlYy5lZHUuaW4iLCJleHAiOjE3NTA5MjE3NTUsImlhdCI6MTc1MDkyMDg1NSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjUyM2Y1YzZjLWUyM2ItNGEzZi1iYjNlLWEzYmY4ZjA4Y2JiOCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNpdmFzaGFua2FyYm9kYXBhdGkiLCJzdWIiOiI3YTJhM2FhMS1hZWI2LTRkMzgtOWRiYS05ZjUwNTgzMmI0YWYifSwiZW1haWwiOiIyMmE5MWEwNWE5QGFlYy5lZHUuaW4iLCJuYW1lIjoic2l2YXNoYW5rYXJib2RhcGF0aSIsInJvbGxObyI6IjIyYTkxYTA1YTkiLCJhY2Nlc3NDb2RlIjoiTkZ3Z1JUIiwiY2xpZW50SUQiOiI3YTJhM2FhMS1hZWI2LTRkMzgtOWRiYS05ZjUwNTgzMmI0YWYiLCJjbGllbnRTZWNyZXQiOiJSRHVncUZxWUVqTWtueldBIn0.qehEPkx1y2ZEVAuVbHg4pd2I5LJ3ZzVvHgmJ9dVFoRg";
async function logToServer(stack, level, message) {
  const apiUrl = "http://20.244.56.144/evaluation-service/logs";

  const requestBody = {
    stack: stack,    
    level: level,  
    message: message
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify(requestBody)
    });

    const text = await response.text(); 
    try {
      const data = JSON.parse(text);
      console.log("Log response:", data);
    } catch {
      console.log("Non-JSON response from server:", text);
    }
  } catch (error) {
    console.error("Error sending log:", error);
  }
}
