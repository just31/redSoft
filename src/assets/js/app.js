$(function() {
    'use strict';

    // Тестируем, что js-скрипты попали в сборку
    const logger = (word = 'Hi,') => {
        console.log(word, '🤨!!!', "\nThank you for using this template!😎");
    }
    logger();


    // Рисуем дуги canvas, в двух первых экранах.

    function draw_1() {
        var b_canvas = document.getElementById("1");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(1000, 250);

        // Контрольные и конечная точки
        var controlX_1 = 350;
        var controlY_1 = -300;
        var controlX_2 = 0;
        var controlY_2 = 400;
        var endPointX = 0;
        var endPointY = 400;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_1();

    function draw_2() {
        var b_canvas = document.getElementById("2");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(1500, 450);

        // Контрольные и конечная точки
        var controlX_1 = 550;
        var controlY_1 = -550;
        var controlX_2 = 0;
        var controlY_2 = 730;
        var endPointX = 33;
        var endPointY = 730;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_2();

    function draw_3() {
        var b_canvas = document.getElementById("3");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(120, 90);

        // Контрольные и конечная точки
        var controlX_1 = 60;
        var controlY_1 = 45;
        var controlX_2 = 10;
        var controlY_2 = 0;
        var endPointX = 10;
        var endPointY = 0;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_3();

    function draw_4() {
        var b_canvas = document.getElementById("4");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(400, 0);

        // Контрольные и конечная точки
        var controlX_1 = 60;
        var controlY_1 = 150;
        var controlX_2 = 0;
        var controlY_2 = 700;
        var endPointX = 0;
        var endPointY = 700;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_4();

    function draw_5() {
        var b_canvas = document.getElementById("5");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(902, 0);

        // Контрольные и конечная точки
        var controlX_1 = 700;
        var controlY_1 = 450;
        var controlX_2 = 0;
        var controlY_2 = 500;
        var endPointX = 0;
        var endPointY = 500;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_5();

    function draw_6() {
        var b_canvas = document.getElementById("5");
        var context = b_canvas.getContext("2d");

        context.lineWidth = 1;
        context.strokeStyle = "#5489c3";

        // Устанавливаем начало кривой
        context.moveTo(433, 0);

        // Контрольные и конечная точки
        var controlX_1 = 355;
        var controlY_1 = 250;
        var controlX_2 = 350;
        var controlY_2 = 350;
        var endPointX = 0;
        var endPointY = 400;

        // Рисуем кривую
        context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
        context.stroke();
    }

    draw_6();

});