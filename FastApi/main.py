from fastapi import FastAPI

app = FastAPI()


@app.get("/", tags=["Hello World"])
def read_root() -> dict:
    return {"Hello": "World"}


@app.get("/students", tags=["Student API"])
def get_students() -> dict:
    return students


@app.get("/students/{id}", tags=["Student API"])
def get_student_by_id(id: int) -> dict:
    for student in students:
        if student["id"] == id:
            return student


@app.delete("/students/{id}", tags=["Student API"])
def delete_student_by_id(id: int) -> dict:
    for student in students:
        if student["id"] == id:
            students.remove(student)
    return students


@app.delete("/students", tags=["Student API"])
def delete_all_students() -> dict:
    students.clear()
    return {"Status": "Wszystkie niegrzeczne dzieci zostaly wyrzucone"}


@app.post("/students", tags=["Student API"])
def add_student(new_student: dict) -> dict:
    students.append(new_student)
    return {"Status": "Uczen zostal dodany!"}


@app.put("/students/{id}", tags=["Student API"])
def update_student(id: int, updated_student: dict) -> dict:
    for student in students:
        if student["id"] == id:
            student["first_name"] = updated_student["first_name"]
            student["last_name"] = updated_student["last_name"]
            student["age"] = updated_student["age"]
    return {"Status": "Uczen zostal poprawnie zmodyfikowany"}


students = [
    {"id": 1, "first_name": "Leszek", "last_name": "Nowojewski", "age": 15},
    {"id": 2, "first_name": "Karol", "last_name": "Wojtyła", "age": 21},
    {"id": 3, "first_name": "Zbigniew", "last_name": "Stonoga", "age": 50},
]