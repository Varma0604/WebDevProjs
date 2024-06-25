const details = {
  goal: {
      title: "Set Clear Goals",
      content: "Break down your tasks into smaller, achievable goals. This makes them less daunting and more manageable. For example, instead of 'learn Python', aim for 'complete basic Python tutorial by Friday'.",
      interactive: `
          <h4>Create Your Goals</h4>
          <input type="text" id="goal-input" placeholder="Enter your goal...">
          <input type="button" value="Add Goal" onclick="addGoal()">
          <ul id="goal-list"></ul>
      `
  },
  schedule: {
      title: "Create a Schedule",
      content: "Dedicate specific times of the day to study and programming practice. Use techniques like Pomodoro (25 minutes of work followed by a 5-minute break) to maintain focus.",
      interactive: `
          <h4>Schedule Your Tasks</h4>
          <input type="text" id="task-input" placeholder="Enter your task...">
          <input type="time" id="time-input">
          <input type="button" value="Add Task" onclick="addTask()">
          <ul id="task-list"></ul>
      `
  },
  group: {
      title: "Study Group",
      content: "Working with others provides accountability and motivation. Study groups or coding partners can help keep you on track and make learning more interactive.",
      interactive: `
          <h4>Find or Create a Study Group</h4>
          <p>Join existing study groups on platforms like Meetup or create your own group with friends and colleagues.</p>
          <a href="https://www.meetup.com/find/events/?allMeetups=true&keywords=study%20group" target="_blank">Find Study Groups on Meetup</a>
      `
  },
  distractions: {
      title: "Minimize Distractions",
      content: "Choose a quiet, comfortable place for studying and coding. Use apps like Focus@Will, Freedom, or StayFocusd to block distracting websites and apps during study sessions.",
      interactive: `
          <h4>Block Distracting Websites</h4>
          <p>Use browser extensions to block distracting websites during your study time.</p>
          <a href="https://www.focusatwill.com/" target="_blank">Focus@Will</a><br>
          <a href="https://freedom.to/" target="_blank">Freedom</a><br>
          <a href="https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji" target="_blank">StayFocusd (Chrome Extension)</a>
      `
  },
  rewards: {
      title: "Use Rewards",
      content: "Reward yourself after completing tasks. This could be a small treat, a break to watch a video, or anything that feels like a reward. Taking short breaks can refresh your mind and improve productivity.",
      interactive: `
          <h4>Set Your Rewards</h4>
          <input type="text" id="reward-input" placeholder="Enter your reward...">
          <input type="button" value="Add Reward" onclick="addReward()">
          <ul id="reward-list"></ul>
      `
  },
  resources: {
      title: "Online Resources",
      content: "Use platforms like Coursera, Udemy, or Khan Academy for structured learning. Websites like LeetCode, HackerRank, and Codewars offer interactive coding challenges.",
      interactive: `
          <h4>Explore Online Learning Platforms</h4>
          <a href="https://www.coursera.org/" target="_blank">Coursera</a><br>
          <a href="https://www.udemy.com/" target="_blank">Udemy</a><br>
          <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a><br>
          <a href="https://leetcode.com/" target="_blank">LeetCode</a><br>
          <a href="https://www.hackerrank.com/" target="_blank">HackerRank</a><br>
          <a href="https://www.codewars.com/" target="_blank">Codewars</a>
      `
  },
  positivity: {
      title: "Stay Positive",
      content: "Maintain a growth mindset. Understand that learning is a process and it's okay to make mistakes. Regularly review what you’ve learned and recognize your progress to stay motivated.",
      interactive: `
          <h4>Track Your Progress</h4>
          <input type="text" id="progress-input" placeholder="Enter your progress...">
          <input type="button" value="Add Progress" onclick="addProgress()">
          <ul id="progress-list"></ul>
      `
  },
  mentorship: {
      title: "Seek Mentorship",
      content: "Finding a mentor in the field can provide valuable insights, support, and encouragement. They can help you navigate the learning process and keep you motivated.",
      interactive: `
          <h4>Find a Mentor</h4>
          <p>Use platforms like LinkedIn or industry-specific forums to connect with potential mentors.</p>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a><br>
          <a href="https://www.reddit.com/r/learnprogramming/" target="_blank">Reddit - r/learnprogramming</a>
      `
  }
};

function showDetails(key) {
  const detailTitle = document.getElementById('detail-title');
  const detailContent = document.getElementById('detail-content');
  const interactiveContent = document.getElementById('interactive-content');
  const detailBox = document.getElementById('details');
  
  detailTitle.innerText = details[key].title;
  detailContent.innerHTML = details[key].content;
  interactiveContent.innerHTML = details[key].interactive;
  detailBox.style.display = 'block';
}

function closeDetails() {
  document.getElementById('details').style.display = 'none';
}

function addGoal() {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  if (goalInput.value) {
      const li = document.createElement('li');
      li.innerText = goalInput.value;
      goalList.appendChild(li);
      goalInput.value = '';
  }
}

function addTask() {
  const taskInput = document.getElementById('task-input');
  const timeInput = document.getElementById('time-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value && timeInput.value) {
      const li = document.createElement('li');
      li.innerText = `${taskInput.value} at ${timeInput.value}`;
      taskList.appendChild(li);
      taskInput.value = '';
      timeInput.value = '';
  }
}

function addReward() {
  const rewardInput = document.getElementById('reward-input');
  const rewardList = document.getElementById('reward-list');
  if (rewardInput.value) {
      const li = document.createElement('li');
      li.innerText = rewardInput.value;
      rewardList.appendChild(li);
      rewardInput.value = '';
  }
}

function addProgress() {
  const progressInput = document.getElementById('progress-input');
  const progressList = document.getElementById('progress-list');
  if (progressInput.value) {
      const li = document.createElement('li');
      li.innerText = progressInput.value;
      progressList.appendChild(li);
      progressInput.value = '';
  }
}
