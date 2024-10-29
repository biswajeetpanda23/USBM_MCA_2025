let countdown;
 let timeLeft = 0;

 const startCountdown=(() => { 
            const timeInput = document.getElementById('timeInput').value;  
           
            timeLeft = timeInput;

            document.getElementById('countdownDisplay').textContent = `Time left: ${timeLeft}s`;  // Display the current time left

            clearInterval(countdown);  
            countdown = setInterval(() => {
                timeLeft--; // Decrement the time in  every second
                document.getElementById('countdownDisplay').textContent = `Time left: ${timeLeft}s`; // Update the countdown display every second

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    document.getElementById('countdownDisplay').textContent = "Time's up! Bye ";
                }
            }, 1000);
        });

        // Stop the countdown 
        function stopCountdown() { 
            clearInterval(countdown); // Clear the countdown
            document.getElementById('countdownDisplay').textContent = "Countdown stopped.";
        }