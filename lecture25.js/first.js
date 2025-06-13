const aiQuestions = [
    {
      question: "What does AI stand for?",
      options: ["Artificial Integration", "Automated Input", "Artificial Intelligence", "Automatic Interface"],
      answer: "Artificial Intelligence"
    },
    {
      question: "Which programming language is most commonly used in AI development?",
      options: ["Java", "Python", "C#", "HTML"],
      answer: "Python"
    },
    {
      question: "Who is considered the father of Artificial Intelligence?",
      options: ["Alan Turing", "Geoffrey Hinton", "John McCarthy", "Marvin Minsky"],
      answer: "John McCarthy"
    },
    {
      question: "Which of the following is a subset of AI that focuses on learning from data?",
      options: ["Machine Learning", "Data Science", "Cloud Computing", "Networking"],
      answer: "Machine Learning"
    },
    {
      question: "What is the full form of NLP in AI?",
      options: ["Network Learning Protocol", "Neural Language Process", "Natural Language Processing", "Natural Logic Programming"],
      answer: "Natural Language Processing"
    },
    {
      question: "Which of these is NOT a type of Machine Learning?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Sequential Learning"],
      answer: "Sequential Learning"
    },
    {
      question: "What is Deep Learning based on?",
      options: ["Decision Trees", "Neural Networks", "Linear Regression", "SVM"],
      answer: "Neural Networks"
    },
    {
      question: "Which company created the AI model ChatGPT?",
      options: ["Google", "Meta", "OpenAI", "Microsoft"],
      answer: "OpenAI"
    },
    {
      question: "Which neural network is used mainly for image recognition?",
      options: ["CNN", "RNN", "DNN", "BERT"],
      answer: "CNN"
    },
    {
      question: "Which AI concept is used for teaching machines through rewards and punishments?",
      options: ["Supervised Learning", "Reinforcement Learning", "Deep Learning", "Clustering"],
      answer: "Reinforcement Learning"
    },
    {
      question: "What is the goal of Turing Test?",
      options: ["To measure GPU performance", "To test data integrity", "To check if AI can think", "To check if AI can mimic human behavior"],
      answer: "To check if AI can mimic human behavior"
    },
    {
      question: "Which of the following is an example of Narrow AI?",
      options: ["Human-like robot", "Self-aware AI", "Face Recognition System", "General AI"],
      answer: "Face Recognition System"
    },
    {
      question: "Which of the following is a popular framework for Deep Learning?",
      options: ["NumPy", "TensorFlow", "Matplotlib", "Pandas"],
      answer: "TensorFlow"
    },
    {
      question: "Which algorithm is commonly used for classification tasks?",
      options: ["K-Means", "Linear Regression", "Logistic Regression", "Apriori"],
      answer: "Logistic Regression"
    },
    {
      question: "What does 'bias' in a neural network represent?",
      options: ["Error rate", "Memory consumption", "A constant added to input", "Learning speed"],
      answer: "A constant added to input"
    },
    {
      question: "Which AI model is used for understanding language context better?",
      options: ["KNN", "SVM", "BERT", "CNN"],
      answer: "BERT"
    },
    {
      question: "Which of the following is NOT a benefit of AI?",
      options: ["Speed", "Accuracy", "Creativity", "Repetition of tasks"],
      answer: "Creativity"
    },
    {
      question: "Which is a major ethical concern in AI?",
      options: ["Battery life", "Color themes", "Data bias", "Code indentation"],
      answer: "Data bias"
    },
    {
      question: "What is the role of a training dataset in Machine Learning?",
      options: ["Testing output", "Predicting errors", "Teaching the model", "Improving speed"],
      answer: "Teaching the model"
    },
    {
      question: "Which of these AI types can understand and learn any intellectual task a human can?",
      options: ["Narrow AI", "General AI", "Supervised AI", "Statistical AI"],
      answer: "General AI"
    }
  ];
  

// ✅ Function to get 5 random unique questions
function Randomquestion() {
  const data = new Set();

  while (data.size !== 5) {
    const index = Math.floor(Math.random() * aiQuestions.length);
    data.add(aiQuestions[index]); // Each object is added once due to Set
  }

  return [...data]; // Convert Set to Array
}

// ✅ Get the form element
const form = document.querySelector("form");

// ✅ Get 5 random questions
const problem = Randomquestion();

const original_answer = {};


problem.forEach((obj, index) => {
  const div_element = document.createElement("div");
  div_element.className = "question";
  original_answer[`q${index+1}`]=obj['answer'];

 

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj.question}`;
  div_element.appendChild(para);

  // ✅ Create 4 options for each question
  obj.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });

  form.appendChild(div_element);
});
// ✅ Submit button
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.className = "submit-btn";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

// ✅ Reset button
const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.className = "reset-btn";
resetBtn.textContent = "Reset";
form.appendChild(resetBtn);



// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]

 
 form.addEventListener('submit',(event)=>{
     
    event.preventDefault();
    const data = new FormData(form); 
    let result = 0
 
    for(let [key,value] of data.entries())
    {
     if(value===original_answer[key])
         result++;
    }
 
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`;
    form.reset();
 
 })
 