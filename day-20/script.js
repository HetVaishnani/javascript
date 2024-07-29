function cl() {

    let arr =
        [
            {
                Quote: " “Whenever you see a successful business, someone once made a courageous decision.” ",
                Writer: " - Peter F.Drucker"

            },
            {
                Quote: " “Success is often achieved by those who don’t know that failure is inevitable.” ",
                Writer: " - Coco Chanel "

            },
            {
                Quote: " “There’s no shortage of remarkable ideas, what’s missing is the will to execute them.” ",
                Writer: " - Seth Godin "

            },
            {
                Quote: " “The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” ",
                Writer: " - Winston Churchill "

            },
            {
                Quote: " “Dear optimist, pessimist and realist ― while you guys were busy arguing about the glass of wine, I drank it! Sincerely, the opportunist!.” ",
                Writer: " - Lori Greiner "

            },
            {
                Quote: " “Most great people have attained their greatest success just one step beyond their greatest failure.” ",
                Writer: " - Napoleon Hill "

            },
            {
                Quote: " “Some people dream of success, while other people get up every morning and make it happen.” ",
                Writer: " - Wayne Huizenga "

            },
            {
                Quote: " I have not failed. I’ve just found 10,000 ways that won’t work.” ",
                Writer: " - Thomas Edison "

            },
            {
                Quote: " “Don’t worry about failure; you only have to be right once.” ",
                Writer: " - Drew Houston "

            },
            {
                Quote: " “’Move fast and break things.’ …unless you are breaking some stuff, you are not moving fast enough.” ",
                Writer: " - Mark Zuckerberg "

            },
            {
                Quote: " “Power should be reserved for weightlifting and boats, and leadership really involves responsibility.” ",
                Writer: " - Herb Kelleher "

            },
            {
                Quote: " “Leaders think and talk about the solutions. Followers think and talk about the problems.” ",
                Writer: " - Brian Tracy "

            },
            {
                Quote: " “The key to successful leadership is influence, not authority.” ",
                Writer: " - Kenneth H. Blanchard "

            },
            {
                Quote: " “Always stay true to yourself and never let what somebody else says distract you from your goals.”  ",
                Writer: " - Michelle Obama "

            },

        ]

    let number = Math.round(Math.random() * arr.length)

    document.getElementById("q").innerHTML = `<h1 class="qu">${arr[number].Quote} </h1> <h2>${arr[number].Writer}</h2>`
}
cl()