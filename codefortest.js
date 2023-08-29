window.addEventListener('DOMContentLoaded', function() {
  // Create the alert box element
  var alertBox = document.createElement('div');
  alertBox.classList.add('alert-box');

  // Create the close button
  var closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerText = 'X';

  // Add event listener to close the alert box when clicking the close button
  closeButton.addEventListener('click', function() {
      alertBox.style.display = 'none';
  });

  // Add the close button to the alert box
  alertBox.appendChild(closeButton);

  // Create another element for the text
  var textBox = document.createElement('span');
  textBox.innerText =
      "Welcome!\nThis test is 80 questions long, once completed compare your results to the bottom of the page.";

  // Append the text element to the alert box
  alertBox.appendChild(textBox);

  // Add the alert box to the body element
  document.body.appendChild(alertBox);
});

const gifts = [
  "Administration",
  "Missions",
  "Discernment",
  "Evangelism",
  "Exhortation/Encouragement",
  "Faith",
  "Giving",
  "Helps",
  "Celibacy",
  "Knowledge",
  "Leadership",
  "Mercy/Compassion",
  "Pastoring",
  "Service",
  "Teaching",
  "Wisdom",
];

const questions = [
{
question: "(5 is definitely agree 1 is strongly disagree)\n\n Q.1 I enjoy the responsibility of making important decisions that affect others.",
gift: "Administration",
giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  { answer: "2", score: 1 },
  { answer: "1", score: 0 },
],
},
{
question: "Q.2 I often think God is calling me to take the gospel to people who haven’t heard about Jesus.",
gift: "Missions",
giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  { answer: "2", score: 1 },
  { answer: "1", score: 0 },
],
},
{
question: "Q.3 It is easy for me to recognize talents and gifts in other people.",
gift: "Discernment",
giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  { answer: "2", score: 1 },
  { answer: "1", score: 0 },
],
},

{
question: "Q.4 I live out the truths of gospel with words and actions so that others see and understand God’s love and grace in their lives.",
gift: "Evangelism",
giftScores: [
{ answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
],
},
{
question: "Q.5 It is enjoyable to motivate people to help them take the next step in following Jesus.",
gift: "Exhortation/Encouragement",
giftScores: [
{ answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
],
},
{
question: "Q.6 I often step out to attempt the impossible.",
gift: "Faith",
giftScores: [
{ answer: "5", score: 4 },
{ answer: "4", score: 3 },
{ answer: "3", score: 2 },
{answer: "2", score: 1},
{answer: "1", score: 0},
],
},{
question: "Q.7 I give liberally and joyfully to people in financial need or to projects requiring support.",
gift: "Giving",
giftScores: [
{ answer: "5", score: 4 },
{ answer: "4", score: 3 },
{ answer: "3", score: 2 },
{answer: "2", score: 1},
{answer: "1", score: 0},
],
},
{
question: "Q.8 I enjoy working behind the scenes in order to support the work of others.",
gift: "Helps",
giftScores: [
{ answer: "5", score: 4 },
{ answer: "4", score: 3 },
{ answer: "3", score: 2 },
{answer: "2", score: 1},
{answer: "1", score: 0},
],
},
{
question: "Q.9 I often wonder why people struggle with sexual urges, since these are not a temptation for me.",
gift: "Celibacy",
giftScores: [
{ answer: "5", score: 4 },
{ answer: "4", score: 3 },
{ answer: "3", score: 2 },
{answer: "2", score: 1},
{answer: "1", score: 0},
],
},{
question: "Q.10 I am often approached by people who want to know my perspective on a certain Bible passage or theological concept. ",
gift: "Knowledge",
giftScores: [
{ answer: "5", score: 4 },
{ answer: "4", score: 3 },
{ answer: "3", score: 2 },
{answer: "2", score: 1},
{answer: "1", score: 0},
],
},
{
  question: "Q.11 I am able to motivate others to accomplish a goal.",
  gift: "Leadership",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.12 I empathize with hurting people and desire to help in their healing process.",
  gift: "Mercy/Compassion",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },{
  question: "Q.13 It is enjoyable to have the responsibility of leading other people in their spiritual life.",
  gift: "Pastoring",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.14 There is great joy in doing little jobs for other people and helping with day-to-day tasks. ",
  gift: "Service",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.15 I love to read and study God’s Word and then share with others what I have learned.",
  gift: "Teaching",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },{
  question: "Q.16 I am often sought out for advice on personal or spiritual matters.",
  gift: "Wisdom",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.17 I enjoy organizing people and harnessing their gifts and talents to solve a particular problem. ",
  gift: "Administration",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.18 I have a strong burden to share the gospel with the unreached people groups of the world",
  gift: "Missions",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.19 I usually detect spiritual truth from spiritual error before fellow believers.",
  gift: "Discernment",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.20 I find it easier to build relationships with non-believers than with believers.",
  gift: "Evangelism",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.21 I like to encourage people to revitalize their spiritual life through Bible study, prayer, or getting involved in community service.",
  gift: "Exhortation/Encouragement",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.22 I find it natural and easy to know that God is hearing and answering my prayers",
  gift: "Faith",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.23 I manage my money well in order to free more of it for giving.",
  gift: "Giving",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.24 In life, I gravitate toward undone work, even if unpopular.",
  gift: "Helps",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.25 I want to serve God with all my time and energy, and am sometimes afraid that marriage or children might get in the way. ",
  gift: "Celibacy",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.26 I am committed to spending large blocks of time on reading and studying Scripture so that I might know biblical truth more fully and accurately.",
  gift: "Knowledge",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.27 I know where groups of people should be headed and the steps they need to take to accomplish the goals of the group",
  gift: "Leadership",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.28 I can patiently support those going through painful experiences as they try to stabilize their lives.",
  gift: "Mercy/Compassion",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.29 I have a strong desire to seek out wayward believers and restore them to fellowship with Jesus and the church.",
  gift: "Pastoring",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.30 I enjoy doing routine tasks to help others.",
  gift: "Service",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.31 People often tell me I am able to share difficult truths in ways that are easy to understand. ",
  gift: "Teaching",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.32 I often find simple, practical solutions in the midst of conflict or confusion.",
  gift: "Wisdom",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.33 People often look to me for guidance in coordination, organization, and ministry opportunities.",
  gift: "Administration",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.34 I desire to learn another language, culture, or religion so that I can better connect the truths of the gospel with the people in that culture.",
  gift: "Missions",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.35 It is easy for me to tell if a person is honest or dishonest.",
  gift: "Discernment",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.36 I am effective at adapting the gospel message to fit a person’s needs or current situation.",
  gift: "Evangelism",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.37 I can challenge others without making them feel condemned.",
  gift: "Exhortation/Encouragement",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.38 I have unwavering confidence in God’s continuing provision to help, even in difficult times.",
  gift: "Faith",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.39 I like knowing my financial support is making a real difference in the lives of others.",
  gift: "Giving",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.40 I cannot stand idly by while things go undone.",
  gift: "Helps",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.41 I have never had problems with lust or strong sexual desires.",
  gift: "Celibacy",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.42 I am able to grasp and understand passages in Scripture which others find difficult. ",
  gift: "Knowledge",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.43 I am able to influence others to achieve a goal.",
  gift: "Leadership",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.44 I enjoy helping people sometimes regarded as undeserving or beyond help.",
  gift: "Mercy/Compassion",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.45 In the past, when helping someone, I try to provide direction for the whole person— relationally, emotionally, spiritually, etc. ",
  gift: "Pastoring",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.46 I receive great satisfaction in doing small or trivial tasks for others that need to be done. ",
  gift: "Service",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.47 I pay close attention to the words, phrases and meanings of those who teach God’s Word.",
  gift: "Teaching",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.48 I can anticipate the likely consequence of an individual’s or group’s action.",
  gift: "Wisdom",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.49 The development of effective plans for church ministry or community service gives me great satisfaction.",
  gift: "Administration",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.50 It is easy for me to move into a new community and make friends. ",
  gift: "Missions",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.51 God has used me to warn others of the danger of a certain teaching.",
  gift: "Discernment",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.52 I openly and confidently tell others what Jesus has done for me, and want others to ask me about my faith",
  gift: "Evangelism",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.53 People express to me how much I’ve helped or encouraged them in a time of need. ",
  gift: "Exhortation/Encouragement",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.54 I believe God will help me accomplish great things. ",
  gift: "Faith",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.55 I believe I have been given an abundance of resources so that I may give more to help with the financial needs of others.",
  gift: "Giving",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.56 The church needs to stop talking so much and start helping people in practical ways. ",
  gift: "Helps",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.57 When I imagine my future, I rarely envision a spouse or family.",
  gift: "Celibacy",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.58 I discover important biblical truths when reading or studying Scripture which benefit others in the church. ",
  gift: "Knowledge",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.59 I can manage people and resources effectively to accomplish set goals. ",
  gift: "Leadership",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.60 I enjoy doing practical things for people who are in need.",
  gift: "Mercy/Compassion",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.61 I often see other believers respond spiritually to my direction and leadership. ",
  gift: "Pastoring",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.62 I often recognize ways that I can care for others indirectly without speaking or teaching.",
  gift: "Service",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.63 I take a systematic approach to my daily study of the Bible.",
  gift: "Teaching",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.64 I have a strong sense of confidence in my solution to problems. ",
  gift: "Wisdom",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.65 I would rather make a decision for a group than persuade them to reach the same decision",
  gift: "Administration",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.66 The thought of moving to a new community and making new friends is exciting to me.",
  gift: "Missions",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.67 I often have insights into a person’s character or motives, and receive confirmation of my perceptions at a later date.  ",
  gift: "Discernment",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.68 I seem to be able to determine when a person is prepared to receive Jesus Christ.",
  gift: "Evangelism",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.69 I would rather develop a friendship with a Christian person than a non-Christian.",
  gift: "Exhortation/Encouragement",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.70 I am regularly challenging others to trust God and step out in faith to do difficult things.",
  gift: "Faith",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.71 I have great satisfaction in giving large amounts of money to others in need.",
  gift: "Giving",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.72 I would rather support someone in their ministry than lead a ministry of my own.",
  gift: "Helps",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.73 I am currently single, and am fine with never being married or having children.",
  gift: "Celibacy",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.74 It is easy for me to learn difficult truths.",
  gift: "Knowledge",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.75 People seem to enjoy following me to do an important task.  ",
  gift: "Leadership",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.76 I enjoy ministering to a person who is sick in the hospital. ",
  gift: "Mercy/Compassion",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.77 Other Christians frequently come to me with their cares and spiritual worries. ",
  gift: "Pastoring",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.78 I don’t mind helping others even if they are undeserving or take advantage of me.",
  gift: "Service",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "Q.79 I am always looking for better ways to explain things to people so they can grow spiritually and personally. ",
  gift: "Teaching",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },
  {
  question: "(Compare results to the bottom of the page)\n\nQ.80 When people follow my advice in difficult situations, things often turn out well. ",
  gift: "Wisdom",
  giftScores: [
  { answer: "5", score: 4 },
  { answer: "4", score: 3 },
  { answer: "3", score: 2 },
  {answer: "2", score: 1},
  {answer: "1", score: 0},
  ],
  },



  // Add more questions here
];

let currentQuestionIndex = 0;
const totalQuestions = questions.length;

// Check if progress is saved in local storage
if (localStorage.getItem('questionIndex')) {
  currentQuestionIndex = parseInt(localStorage.getItem('questionIndex'));
}

// Function to check if all questions are answered
function checkAnswers() {
  const selectedAnswers = Array.from(document.querySelectorAll("button.selected"));

  if (selectedAnswers.length === totalQuestions) {
      document.getElementById("submit-button").disabled = false;
  } else {
      document.getElementById("submit-button").disabled = true;
  }
}

function displayQuestions() {
  const questionContainer = document.getElementById("questions");

  questions.forEach((question, i) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");

      const questionText = document.createElement("p");
      questionText.innerText = question.question;
      questionElement.appendChild(questionText);

      const answerContainer = document.createElement("div");
      answerContainer.classList.add("answer-container");

      question.giftScores.forEach((giftScore, j) => {
          const button = document.createElement("button");
          button.type = "button";
          button.innerHTML = giftScore.answer;
          button.classList.add("answer-button");
          button.dataset.buttonIndex = j; // Add a data attribute to identify the button index

          button.addEventListener("click", function() {
              const selectedButton = questionElement.querySelector("button.selected");
              if (selectedButton && selectedButton !== button) {
                  selectedButton.classList.remove("selected");
                  selectedButton.style.backgroundColor = ""; // Change the background color of the previously selected button back to normal
              }
              else if (selectedButton === button) {
                  selectedButton.classList.remove("selected");
                  button.style.backgroundColor = ""; // Change the background color of the selected button back to normal
              }
              else {
                  button.classList.toggle("selected");
                  button.style.backgroundColor = "black"; // Change the background color of the selected button
              }
              checkAnswers();
          });

          answerContainer.appendChild(button);
      });

      questionElement.appendChild(answerContainer);
      questionContainer.appendChild(questionElement);
  });

  // Restore previously selected answers from local storage
  const selectedAnswers = Array.from(document.querySelectorAll("button.selected"));

  if (localStorage.getItem('selectedAnswers')) {
      const storedSelectedAnswers = JSON.parse(localStorage.getItem('selectedAnswers'));

      storedSelectedAnswers.forEach((selectedAnswer, i) => {
          const buttonIndex = parseInt(selectedAnswer.buttonIndex);
          const button = questionContainer.children[i].querySelectorAll("button")[buttonIndex];

          button.classList.add("selected");
          button.style.backgroundColor = "black";
      });

      checkAnswers();
  }
}

function toggleResults() {
  const resultsContainer = document.getElementById("result");
  const resultsButton = document.getElementById("results-button");

  if (resultsContainer.style.display === "block") {
      resultsContainer.style.display = "none";
      resultsButton.innerHTML = "Results";
  } else {
      resultsContainer.style.display = "block";
      resultsButton.innerHTML = "Close Results";
  }
}

function onSubmit(event) {
  event.preventDefault();
  const selectedAnswers = Array.from(document.querySelectorAll("button.selected")).map((button) =>
      button.innerHTML
  );
  if (selectedAnswers.length === totalQuestions) {
      const scores = Array(gifts.length).fill(0);
      selectedAnswers.forEach((answer, questionIndex) => {
          const question = questions[questionIndex];
          const giftIndex = gifts.indexOf(question.gift);
          const answerScore = question.giftScores.find((score) => score.answer === answer)?.score || 0;
          scores[giftIndex] += answerScore;
      });
      const result = gifts
          .map((gift, index) => ({ gift, score: scores[index] }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 3); // Display only the top 3 gifts
      let resultText = "<h3>Your Spiritual Gifts are:</h3>";
      result.forEach((gift, index) => {
          resultText += "<h5>" + (index + 1) + ". " + gift.gift + "</h5>";
      });

      document.getElementById("result").style.display = "block";
      document.getElementById("gift").innerHTML = resultText;
      document.getElementById("results-button").style.display = "block";
      document.getElementById("restart-button").disabled = false; // Enable the restart button

      // Create the button inside the results container
      var closeButton = document.createElement('button');
      closeButton.id = 'close-button';
      closeButton.type = 'button';
      closeButton.innerText = 'Close Results';
      closeButton.addEventListener('click', toggleResults);

      // Append the close button to the result container
      var resultContainer = document.getElementById('result');
      resultContainer.appendChild(closeButton);
  } else {
      const missedQuestionIndexes = [];
      questions.forEach((_, index) => {
          if (!selectedAnswers.includes(questions[index].giftScores[0].answer)) {
              missedQuestionIndexes.push(index + 1);
          }
      });
      alert("Please answer all the questions!");
      document.getElementById("result").style.display = "none";
      document.getElementById("results-button").style.display = "none";
      document.getElementById("restart-button").disabled = true; // Disable the restart button
  }
  // Deselect and reset the color of the answer buttons
  const answerButtons = Array.from(document.querySelectorAll(".answer-button"));
  answerButtons.forEach((button) => {
      button.classList.remove("selected");
      button.style.backgroundColor = ""; // Reset the background color of the answer button
  });
}




function resetTest() {
  localStorage.removeItem('questionIndex');
  localStorage.removeItem('selectedAnswers');
  window.location.reload();
}

window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener("submit", onSubmit);

  displayQuestions();

  document.getElementById("submit-button").addEventListener("click", function() {
      if (!document.getElementById("submit-button").disabled) {
          onSubmit();
      }
  });

  document.getElementById("results-button").addEventListener("click", toggleResults);

  document.getElementById("questions-container").addEventListener("change", checkAnswers);

  // Create the reset button
  var resetButton = document.createElement('button');
  resetButton.type = 'button';
  resetButton.innerText = 'Reset Test';
  resetButton.addEventListener('click', resetTest);

  // Add the reset button to the page
  document.getElementById('container').appendChild(resetButton);

  // Hide the reset button initially
  resetButton.style.display = 'none';
});

// Save progress to local storage
window.addEventListener("beforeunload", function() {
  const selectedAnswers = Array.from(document.querySelectorAll("button.selected"));
  const storedSelectedAnswers = [];

  selectedAnswers.forEach((selectedAnswer) => {
      const buttonIndex = selectedAnswer.dataset.buttonIndex;
      storedSelectedAnswers.push({ buttonIndex });
  });

  localStorage.setItem('questionIndex', currentQuestionIndex);
  localStorage.setItem('selectedAnswers', JSON.stringify(storedSelectedAnswers));
});



function scrollToPhrase() {
var phrase = document.getElementById("searchInput").value.toLowerCase();
if (phrase) {
  var elements = document.querySelectorAll("#all-gifts h6");
  var found = false;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var content = element.innerText.toLowerCase();
    var startIndex = content.indexOf(phrase);
    if (startIndex !== -1) {
      var node = element.childNodes[0];
      var range = document.createRange();
      range.selectNodeContents(node);
      var text = node.textContent.toLowerCase();
      var start = text.indexOf(phrase);
      range.setStart(node, start);
      range.setEnd(node, start + phrase.length);
      var rect = range.getBoundingClientRect();
      element.parentElement.scrollTop = rect.top + window.pageYOffset - element.parentElement.offsetTop;
      found = true;
      break;
    }
  }
  if (found) {
    // Phrase found, do something here if needed
  } else {
    alert("You misspelled the Gift");
  }
}
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  scrollToPhrase();
}
});

document.getElementById("searchButton").addEventListener("click", function() {
scrollToPhrase();
});


function deselectButtons() {
  const selectedButtons = Array.from(document.querySelectorAll("button.selected"));
  selectedButtons.forEach((button) => {
      button.classList.remove("selected");
      button.style.backgroundColor = ""; // Change the background color of the deselected button back to default
  });
}

// JavaScript code for handling the quiz and displaying results
      // ...

      // Add event listener to the close button
      document.getElementById("close-button").addEventListener("click", function() {
          document.getElementById("result").style.display = "none";
      });

                     // Move the close and restart buttons inside the result container
     var restartButton = document.getElementById("restart-button"); 
     var closeButton = document.getElementById("close-button");
      
      var resultContainer = document.getElementById("result");
      resultContainer.appendChild(closeButton);
      resultContainer.appendChild(restartButton);
