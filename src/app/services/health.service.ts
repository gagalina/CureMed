import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HealthService {
    history = [
        {
            guid: 'cos1',
            diagnosis: 'Здорова шкіра',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos2',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos3',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos4',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos5',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos6',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos7',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos8',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos9',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos10',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos11',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos12',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos13',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos14',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos15',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos16',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos17',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos18',
            diagnosis: 'Чистка обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos19',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        },
        {
            guid: 'cos20',
            diagnosis: 'Ліфтинг обличчя',
            analysis: 'еритроцитів: 5.2, лейкоцитів: 4.5, тромбоцитів: 160'
        }
    ];

    constructor() {
    }

    getHistory() {
        return this.history;
    }

    retrieveHistory(userId) {
        const history = this.history.filter((item) => item.guid === userId);
        return history[0];
    }

}

