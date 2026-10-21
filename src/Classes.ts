/*
Реализуйте класс Counter:
- Значение счётчика хранится в поле counter: number. Значение поля по умолчанию: 0
- В конструктор можно передать параметр start: number - начальное значение счётчика.
- Класс должен иметь метод increment, который увеличивает counter на 1 и возвращает результат
- Класс должен иметь метод decrement, который уменьшает counter на 1 и возвращает результат
 */
export class Counter {
    // Объявляем свойство с типом данных number
    counter: number;

    // Конструктор принимает необязательный параметр start
    // Значение по умолчанию = 0 (если аргумент не передан при создании)
    constructor(start: number = 0) {
        this.counter = start;
    }

    // Метод увеличивает счетчик и возвращает число
    increment(): number {
        this.counter += 1;
        return this.counter;
    }

    // Метод уменьшает счетчик и возвращает число
    decrement(): number {
        this.counter -= 1;
        return this.counter;
    }
}
