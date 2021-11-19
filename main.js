Мария Ряполова
 1. Что такое запрос? что необходимо для того, чтобы отправить запрос на сервер?
 Запрос - это текст, в котором есть глагол, что ты хочешь сделать: get, put, delete, post. 
 Запросами мы общемся с сервером и говорим ему, что мы от него хотим. 
 У запросов есть глагол, заголовок и тело. У get запроса тела нет.






 2. Что такое итератор, написать пример итератора?
 Итератор —  это объект. Для того, чтобы некая коллекция данных ( объект ) была итерабельной, у нее должно быть определено свойство [ Symbol.iterator ].
  [ Symbol.iterator ] должен быть ссылкой на функцию-генератор ( т.е. быть методом )
  Чтобы быть генератором, этот метод должен удовлетворять следующим условиям:
   Метод [ Symbol.iterator ] должен возвращать объект;
   Этот объект должен иметь метод next();
   Метод next() должен возвращать объект со свойствами value и done;

   • Свойство value содержит то, что указано в протоколе генератора после ключевого слова слова yield
   • Свойство done принимает значение true, когда процесс итерирования структуры данных завершен.


const browsers = {
    [ Symbol.iterator ]() {
        let step = 0
        return {
            next() {
                step++;
                return step === 1 ? { value: 'Google', done: false } :
                       step === 2 ? { value: 'Mozilla', done: false } :
                       step === 3 ? { value: 'Safari', done: false } :
                       { value: '', done: true }
            }
   		}
    }
}