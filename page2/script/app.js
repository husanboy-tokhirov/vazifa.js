let firstName = prompt("Ism kiriting:");

let changeName = confirm(`Hozirki ismingiz: ${firstName}. Ism o'zgartirmoqchimisiz?`);

if (changeName) {
    let secondName = prompt("Yangi ism kiriting:");
    if (secondName && secondName) {
        firstName = secondName;
    } 
    else {
          alert("Noto'g'ri ism kiritildi. Ism o'zgartirilmadi.");
    }
}
alert(`Sizning ismingiz:, ${firstName}`);