//Task 2 Створити об'єкт "Студент" з методами для додавання та видалення
//предметів, які він вивчає.

alert("Task 2: Створити об'єкт Студент з методами для додавання та видалення предметів, які він вивчає");

let student = {
  subjects: [],
  
  addSubject(subject){
    for(let i=0; i<this.subjects.length;i++){
        if(subject===this.subjects[i]) return `Ви вже вивчаєте предмет ${subject}`;  
    }
    this.subjects.push(subject);
    return `Предмет ${subject} додано`
  },

  removeSubject(subject){
    for(let i=0; i<this.subjects.length;i++){
      if(subject===this.subjects[i]){
        this.subjects.splice(i,1);
        return `Предмет ${subject} видалено `;
      }
    }
    return `Ви не вивчаєте предмет ${subject}`;
  }   
};

alert("Додаємо предмет Математика  ");
alert(student.addSubject('Математика'));
alert("Додаємо предмет Історія  ");
alert(student.addSubject('Історія'));

alert("Додаємо предмет Математика  ");
alert(student.addSubject('Математика'));
alert("Додаємо предмет Історія  ");
alert(student.addSubject('Історія'));

alert(`Список предметів:  ${student.subjects}`);

alert("Видаляємо предмет Історія  ");
alert(student.removeSubject('Історія'));
alert("Видаляємо предмет Англійська  ");
alert(student.removeSubject('Англійська'));

alert(`Список предметів:  ${student.subjects}`);





