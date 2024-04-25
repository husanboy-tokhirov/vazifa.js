let userName = prompt("Ismingizni kiriting:");
let changeName = confirm("Hozirki ismingiz: ${userName} . Ismingizni o'zgartirmoqchimisiz?");

if (changeName) {
     let newName = prompt("Yangi ismingizni kiriting:");
     if (newName && newName.length > 0) {
          userName = newName;
     } 
          alert("Noto'g'ri ism kiritildi. Ism o'zgartirilmadi.");
}
alert("Sizning ismingiz: ${userName}");