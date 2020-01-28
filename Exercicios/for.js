//1
for (index = 1; index < 100; index++) {
    document.write('<p>' + index + '</p>');
}

//2
for (i = 1; i < 100; i++) {
    if (i % 2 != 0)
        document.write('<p>' + i + '</p>');
}

//3
for (i = 1; i <= 5; i++) {
    let x = i;
    for (j = x; j >= 1; j--)
        document.write('X');
    document.write('</br>');
}

//4
for (i = 5; i >= 1; i--) {
    let x = i;
    for (j = x; j >= 1; j--)
        document.write('$');
    document.write('</br>');
}

//5
let x = 0;
for (i = 1; i <= 50; i++) {
    x += i; // x = x + i
}
document.write(x);