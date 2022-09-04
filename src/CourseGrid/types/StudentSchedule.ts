export interface StudentSchedule {
    advisor: string;
    course_name: string;
    course_number: string;
    email: string;
    expression: string;
    grade_level: string;
    home_room: string;
    room: string;
    student_name: string;
    teacher_name: string;
    schoolid: string;
    section_number: string;
    student_number: string;
    termid: string | number;
    times: string[];
    grade: number;
    course_code: string;
    course_id: string;
    no_of_students?: string | number;
}
