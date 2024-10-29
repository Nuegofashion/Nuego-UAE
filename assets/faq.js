
  let accHeading = document.querySelectorAll('.question');
  let accPanel = document.querySelectorAll('.answer');

  for (let i = 0; i < accHeading.length; i++) {
    accHeading[i].onclick = function () {
      if (this.nextElementSibling.style.maxHeight) {
        hidePanels(); // Hide All open Panels
      } else {
        showPanel(this); // Show the panel
      }
    };
  }

  // Function to Show a Panel
  function showPanel(elem) {
    hidePanels();
    elem.classList.add('active');
    elem.nextElementSibling.style.maxHeight = "1000px";
    
  }

  // Function to Hide all shown Panels

  function hidePanels() {
    for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove('active');
    }
  }
  const searchInput = document.querySelectorAll('.search_ques_faqCategoryPage');
  const quesAnswerContent = document.querySelectorAll('.ques_ans');
  const questions = document.querySelectorAll('.question');
  // Run search function on the input
  searchInput.forEach((input) => {
    input.addEventListener('input', function () {
      searchQues(questions, input.value);
    });
  });

  // Search function
  function searchQues(ques, query) {
    if (!query.trim()) {
      for (var j = 0; j < ques.length; j++) {
        ques[j].parentElement.style.display = 'block';
      }
    } else {
      var query = query.toLowerCase();
      for (var i = 0; i < ques.length; i++) {
        var text = ques[i].textContent.toLowerCase();
        if (text.includes(query)) {
          ques[i].style.display = 'flex';
        } else {
          ques[i].parentElement.style.display = 'none';
        }
      }
    }
  }

  function showquestions(a) {
    a.nextSibling.nextElementSibling.style.display = 'block';
    document.querySelectorAll('.faq-box').forEach((e) => {
      e.style.display = 'none';
    });
  }
  function backfaq() {
    document.querySelectorAll('.question-wrapper').forEach((e) => {
      e.style.display = 'none';
    });
    document.querySelectorAll('.faq-box').forEach((e) => {
      e.style.display = 'block';
    });
  }
