/**
 * GET /
 * Temp Pomodoro Page.
 */
exports.getPomodoro = (req, res) => {
  res.render('pomodoro', {
    title: 'Pomodoro'
  });
};

const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
}


