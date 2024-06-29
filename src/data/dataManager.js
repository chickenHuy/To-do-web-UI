import Data from './data';
import Accout from './accout';
import AccountManager from './accoutManager';

class DataManager {
    constructor(token) {
        const accountManager = new AccountManager(Accout);
        const user = accountManager.getAccountByEmail(token);
        for (let item of Data) {
            if (item.userId === user.id) {
                this.data = item.data;
                break;
            }
        }
    }

    getTaskMyDay() {
        return this.data['my-day'];
    }

    getTasks() {
        let tasks = [];
        tasks = tasks.concat(this.data['my-day']);
        for (let item of this.data['custom']) {
            console.log(item);
            tasks = tasks.concat(item.tasks);
        }
        return tasks;
    }

    getCompletedTasks() {
        let tasks = this.getTasks();
        return tasks.filter(task => task.status === 'done');
    }

    getListCustom() {
        return this.data['custom'];
    }

    getTaskOfCustomItem(id) {
        let custom = this.getListCustom();
        for (let item of custom) {
            if (item.id === id) {
                return item.tasks;
            }
        }
    }

    getCountOfCustom() {
        return this.data['custom'].length;
    }

    addNewListCustom(name) {
        let custom = this.getListCustom();
        custom.push({
            id: this.getCountOfCustom() + 1,
            name: name,
            tasks: [],
        });
    }

    getListNameCustom() {
        let custom = this.getListCustom();
        return custom.map(item => item.name);
    }

    updateTask(navigate, id, newTask) {
        let tasks;

        if (navigate === 'my-day') {
            tasks = this.getTaskMyDay();
        } else {
            tasks = this.getTaskOfCustomItem(id);
        }

        for (let index in tasks) {
            if (tasks[index].id === newTask.id) {
                tasks[index] = newTask;
            }
        }
    }

    addNewTask(navigate, id, task) {
        let tasks;

        if (navigate === 'my-day') {
            tasks = this.getTaskMyDay();
        } else {
            tasks = this.getTaskOfCustomItem(id);
        }

        task.id = tasks.length + 1;
        tasks.push(task);
    }

    removeTask(navigate, id, taskId) {
        let tasks;

        if (navigate === 'my-day') {
            tasks = this.getTaskMyDay();
        } else {
            tasks = this.getTaskOfCustomItem(id);
        }

        for (let index in tasks) {
            if (tasks[index].id === taskId) {
                tasks.splice(index, 1);
            }
        }
    }

    renameItemCustom(id, newName) {
        let custom = this.getListCustom();
        for (let index in custom) {
            if (custom[index].id === id) {
                custom[index].name = newName;
            }
        }
    }

    removeItemCustom(id) {
        let custom = this.getListCustom();
        for (let index in custom) {
            if (custom[index].id === id) {
                custom.splice(index, 1);
            }
        }
    }
}

export default DataManager;