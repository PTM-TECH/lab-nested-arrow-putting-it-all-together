const createLoginTracker = function (
  userInfo = {
    username: "user1",
    password: "password123",
  }
) {
  let attemptCount = 0;
  const maxAttempts = 3;

  return (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }
    attemptCount++;
    if (passwordAttempt === userInfo.password && attemptCount <= maxAttempts) {
      return "Login successful";
    }

    if (attemptCount <= maxAttempts) {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
};
module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
