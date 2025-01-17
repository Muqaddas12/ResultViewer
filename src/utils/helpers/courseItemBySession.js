export const  courseItemBySession=(session)=>{
  const courseItem = {
    '201819': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS', value: 'otherc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS', value: 'diplomac' },
    ],
    '201920': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS', value: 'otherc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS', value: 'diplomac' },
    ],
    '202021': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS', value: 'otherc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS', value: 'diplomac' },
    ],
    '202122': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS', value: 'otherc' },
      { label: 'B.PHARMA CARRY RESULTS(ODD)', value: 'bpodd' },
      { label: 'B.PHARMA CARRY RESULTS(EVEN))', value: 'bpeven' },
      { label: 'B.PHARMA SPECIAL CARRY OVER RESULTS', value: 'bpspc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS', value: 'diplomac' },
    ],
    '202223': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS', value: 'otherc' },
      { label: 'B.PHARMA CARRY RESULTS(ODD)', value: 'bpodd' },
      { label: 'B.PHARMA CARRY RESULTS(EVEN))', value: 'bpeven' },
      { label: 'B.PHARMA SPECIAL CARRY OVER RESULTS', value: 'bpspc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS', value: 'diplomac' },
    ],
    '202324': [
      { label: 'UG & PG RESULTS', value: 'other' },
      { label: 'UG & PG CARRY RESULTS(ODD)', value: 'otheroddc' },
      { label: 'UG & PG CARRY RESULTS(EVEN))', value: 'otherevenc' },
      { label: 'UG & PG CARRY RESULTS SPECIAL CARRY OVER RESULTS', value: 'otherspc' },
      { label: 'DIPLOMA COURSES RESULTS', value: 'diploma' },
      { label: 'DIPLOMA COURSES CARRY RESULTS(ODD)', value: 'diplomaoddc' },
      { label: 'DIPLOMA COURSES CARRY RESULTS(EVEN)', value: 'diplomaevenc' },
      { label: 'DIPLOMA COURSES SPECIAL CARRY OVER RESULTS', value: 'diplomaspc' },
    ],
  };
  return courseItem[session]
}