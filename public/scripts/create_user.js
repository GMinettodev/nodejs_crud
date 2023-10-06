import { user } from "../../src/user.ts";

const new_user = new user();

new_user.username(getElementById(username));
new_user.password(getElementById(password));

document.getElementById(username).innerHTML = new_user.username;

document.write(new_user.username).innerHtml;
document.write(new_user.password);

function redirect() {
    window.location.href = "user.html";
}
