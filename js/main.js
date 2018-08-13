 $(document).ready(function () {

            var myDate = new Date();
            myDate.setDate(myDate.getDate() + 2);
            $("#countdown").countdown(myDate, function (event) {
                $(this).html(
                    event.strftime(
                        '<div class="timer-wrapper"><div class="time">%H</div><span class="text">Часов</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Минут</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Секунд</span></div>'
                    )
                );
            });

        });