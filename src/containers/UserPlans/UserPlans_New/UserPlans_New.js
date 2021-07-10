import React from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../../components/Logo/Logo";
import ReturnIcon from "../../../components/ReturnIcon/ReturnIcon";
import "../UserPlans.css";

const UserPlans_New = () => {
  const questions = [
    {
      id: 0,
      question:
        "Do you have a heart condition that you should only perform physical activity recommended by a doctor?",
    },
    {
      id: 1,
      question:
        "Do you feel pain in your cest when you perform physical activity?",
    },
    {
      id: 2,
      question:
        "In the past month, have you had chest pain when you were not performing any physical activity?",
    },
    {
      id: 3,
      question:
        "Do you lose your balance beacuse of dizziness or do you ever lose consciousness?*",
    },
    {
      id: 4,
      question:
        "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
    },
    {
      id: 5,
      question:
        "Is your doctor currently prescribing any medication for your blood pressure or for a heart condition?",
    },
    {
      id: 6,
      question:
        "Do you know of any other reason you should not engage in physical activity?",
    },
  ];

  const forms = [
    {
      id: 0,
      question:
        "How long have you been participating in regular physical activity?",
      answers: [
        "Not regularly",
        "Less than 3 months",
        "6 months to 1 year",
        "1-2 years",
        "2 or more years",
      ],
    },
    {
      id: 1,
      question:
        "In an average week, estimate how many minutes of light physical activity you perform (e.g. cooking, ironing, walking, gardening, stretching, etc.)?",
      answers: [
        "Less than 30 minutes",
        "30-60 minutes",
        "1-2 hours",
        "3-4 hours",
        "4 or more hours",
      ],
    },
    {
      id: 2,
      question:
        "In an average week, estimate how many minutes of moderate physical activity you perform, (e.g. brisk walking/jogging, lawn mowing, climbing stairs, mopping, etc.)?",
      answers: [
        "Less than 30 minutes",
        "30-60 minutes",
        "1-2 hours",
        "3-4 hours",
        "4 or more hours",
      ],
    },
    {
      id: 3,
      question:
        "In an average week, estimate how many minutes of intense physical activity you perform (e.g. running, competitive sports, carrying heavy loads, bicycling fast, etc.)?",
      answers: [
        "Less than 30 minutes",
        "30-60 minutes",
        "1-2 hours",
        "3-4 hours",
        "4 or more hours",
      ],
    },
    {
      id: 4,
      question:
        "Rank these types of physical activity from 1-5 (favorite to least favorite):",
      answers: [
        "Walking",
        "Bicycling",
        "Swimming",
        "Weight lifting",
        "Jogging/running",
      ],
    },
  ];

  return (
    <div className="userplans_wrapper">
      <ReturnIcon />
      <Logo imgSize="sm" />
      <i className="far fa-calendar-alt userplan_icon"></i>
      <h1 className="userplan_title">New Plan</h1>
      <div className="userplan_user-wrapper">
        <p>Height: 5'7"</p>
        <p>Weight: 143</p>
        <p>Age: 22</p>
      </div>
      <div className="userplan_questions-wrapper">
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <p>{question.question}</p>
              <small className="question left">Yes</small>
              <small className="question right">No</small>
            </div>
          );
        })}
        {forms.map((form) => {
          return (
            <div key={form.id}>
              <p>{form.question}</p>
              <small className="form">{form.answers[0]}</small>
              <small className="form">{form.answers[1]}</small>
              <small className="form active">{form.answers[2]}</small>
              <small className="form">{form.answers[3]}</small>
              <small className="form">{form.answers[4]}</small>
            </div>
          );
        })}
      </div>
      <div className="mb-2 centered-button">
        <Button
          variant="primary"
          size="lg"
          className="userplan_button"
          href="/welcome/user"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UserPlans_New;
