body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

nav {
    background-color: #333;
    overflow: hidden;
}

nav a {
    color: white;
    padding: 14px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

.content {
    padding: 20px;
}

.youtube-video {
    text-align: center;
}

.register-form, .book-section {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.register-form input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.register-form input[type="submit"]:hover {
    background-color: #45a049;
}

.book-section img {
    max-width: 100%;
    border-radius: 8px;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
}

.form-feedback {
    color: green;
    font-size: 16px;
}

.error {
    color: red;
    font-size: 14px;
}

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
