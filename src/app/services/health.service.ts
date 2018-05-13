import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HealthService {
    history = [
        {
            guid: 'cos1',
            diagnosis: 'Good skin',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos2',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos3',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos4',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos5',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos6',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos7',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos8',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos9',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos10',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos11',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos12',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos13',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos14',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos15',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos16',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos17',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos18',
            diagnosis: 'Face lifting',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos19',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
        },
        {
            guid: 'cos20',
            diagnosis: 'Lip injection',
            analysis: 'erythrocyte: 5.2, leukocyte: 4.5, thrombocytes: 160'
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

