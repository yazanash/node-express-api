test("truthiness Assertion from unit / models" , () => {

    var name="Software Testing demo"
 
    var n = null
 
    expect(n).toBeNull()
 
    expect(name).not.toBeNull
 
    // test should have a valid value
 
    expect(test).toBeTruthy()
 
    //fail - as null is unsuccess
 
    expect(n).not.toBeTruthy()
 
    // pass - null worked as false or negative
 
    expect(n).toBeFalsy()
 
    // 0 - work as false
 
    expect(0).toBeFalsy()
 
  })