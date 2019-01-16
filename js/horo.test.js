import {horoIdentificaton} from "../js/horo";

test('It should show horo-sign correctly', ()=>{
    const month = 7; const day =22;
    const result = horoIdentificaton(day,month);
    expect(result).toBe('рак');

});