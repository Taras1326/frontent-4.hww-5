import { alert, defaultModules, info, success, error } from "@pnotify/core/dist/PNotify.js";

import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

import {Chart} from 'chart.js/auto';

defaultModules.set(PNotifyMobile, {});





// Завдання 1

const boxRef = document.querySelector(".box");
const keys = ["a","s","n","i","t","f","d","o","k","h"];

let currentKeyIndex = 0;

boxRef.textContent = keys[currentKeyIndex]

window.addEventListener("keydown",(event) => {

    if (event.key === "Escape") {
        boxRef.textContent = "buy"
        info({
            text: "Ви закінчили гру",
            delay: 500,
          });
    }

    if (event.key === boxRef.textContent) {
        currentKeyIndex += 1;
        boxRef.textContent = keys[currentKeyIndex]
        success({
  text: "правильно",
  delay: 500,
});
    }
    else {
        error({
            text: "не правильно",
            delay: 500,
          });
    }
} )

// Завдання 2


// Створити графік з використанням Chart.js для відображення статистики продажів за останній місяць.

const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const canvas = document.querySelector("#sales-chart")

 new Chart(canvas, config);