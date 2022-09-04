interface Periods {
    [key: string]: {
        [key: string]: {
            start?: string;
            end?: string;
            abbreviation?: string;
            name?: string;
        };
    };
}

export const periods: Periods = {
    "1001": {
        "1": {
            name: "1",
            start: "08:10",
            end: "08:50",
        },
        "2": {
            name: "2",
            start: "08:50",
            end: "09:30",
        },
        "3": {
            name: "3",
            start: "09:50",
            end: "10:30",
        },
        "4": {
            name: "4",
            start: "10:30",
            end: "11:10",
        },
        "5": {
            name: "5",
            start: "11:10",
            end: "11:50",
        },
        "6": {
            name: "6",
            start: "12:40",
            end: "13:20",
        },
        "7": {
            name: "7",
            start: "13:20",
            end: "14:00",
        },
        "8": {
            name: "8",
            start: "14",
            end: "14:40",
        },
        "9": {
            name: "9",
            start: "14:40",
            end: "15:20",
        },
        "10": {
            //home room
            name: "HR",
            start: "08:00",
            end: "08:10",
        },
        "11": {
            //morning recess
            name: "MR",
            start: "09:30",
            end: "09:50",
        },
        "12": {
            //Period 6(1,2)
            name: "Pd 6(1 and 2)",
            start: "11:50",
            end: "12:30",
        },
        "13": {
            //lunch F,3,4,5 EL
            name: "Lunch",
            start: "16:30",
            end: "17:30",
        },
        "14": {
            //playground F,3,4,5 EP
            name: "Play",
            start: "16:30",
            end: "17:30",
        },
        "15": {
            //lunch 1,2
            name: "Lunch",
            start: "16:30",
            end: "17:30",
        },
        "16": {
            name: "Play",
            //playground 1,2
            start: "16:30",
            end: "17:30",
        },
        "17": {
            name: "1",
            start: "08:50",
            end: "09:30",
        },
        "18": {
            name: "2",
            start: "09:50",
            end: "10:30",
        },
        "19": {
            name: "3",
            start: "10:30",
            end: "11:10",
        },
        "20": {
            name: "4",
            start: "11:10",
            end: "11:50",
        },
        "21": {
            name: "5",
            start: "12:40",
            end: "13:20",
        },
        "22": {
            name: "6",
            start: "13:20",
            end: "14:00",
        },
        "23": {
            name: "7",
            start: "14:00",
            end: "14:40",
        },
        "24": {
            name: "8",
            start: "14:40",
            end: "13:20",
        },
    },
    1002: {
        1: {
            abbreviation: "1",
            name: "8:20-9:35",
            start: "08:20",
            end: "09:35",
        },
        2: {
            abbreviation: "2",
            name: "9:40-10:55",
            start: "09:40",
            end: "10:55",
        },
        LR: {
            abbreviation: "LR",
            name: "11:00-12:00",
            start: "11:00",
            end: "12:00",
        },
        3: {
            abbreviation: "3",
            name: "12:00-1:15",
            start: "12:00",
            end: "13:15",
        },
        4: {
            abbreviation: "4",
            name: "2:00-3:20",
            start: "14:00",
            end: "15:20",
        },
    },
    1003: {
        1: {
            abbreviation: "1",
            name: "8:00-9:15",
            start: "8:00",
            end: "09:15",
        },
        2: {
            abbreviation: "2",
            name: "9:40-10:55",
            start: "09:40",
            end: "10:55",
        },
        3: {
            abbreviation: "3",
            name: "11:00-12:15",
            start: "11:00",
            end: "12:15",
        },
        4: {
            abbreviation: "4",
            name: "14:05-15:20",
            start: "14:05",
            end: "15:20",
        },
    },
};
