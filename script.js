var name = prompt("Введите ваше имя");

if (name === 'Денис') {
    alert ('Добрый день, учитель');
} else if(name === 'Алиса' || name === 'Иван' || name === 'Анастасия' || name === 'Андрей') {
    alert( 'Привет, одногрупник' );
} else {
    alert( 'Ты не из нашей песочницы!' );
}