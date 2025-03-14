import React, { useEffect, useState } from 'react';
import PersonLogo from '../assets/icon-person.svg'
import DollarIcon from '../assets/icon-dollar.svg'

const TipCard = () => {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0.00);
  const [total, setTotal] = useState(0.00);
  const [notZero, setNotZero] = useState(true);
  const [notZeroBill, setNotZeroBill] = useState(false)

  const tipOptions = [5, 10, 15, 25, 50];

  useEffect(() => {
    const calculator = () => {
      const billNumber = Number(bill);
      const people = Number(numberOfPeople);
      const tipNumber = Number(tip);

      if(people == 0){
        setNotZero(false);
      }else{
        setNotZero(true);
      }

      if(bill == 0){
        setNotZeroBill(false);
      }else{
        setNotZeroBill(true);
      }


      
      if (billNumber !== 0 && people !== 0) {
        const tipPercentage = tipNumber / 100;
        const totalTip = billNumber * tipPercentage;
        const tipPerPerson = totalTip / people;
        
        setTipAmount(tipPerPerson.toFixed(2));
        setTotal(((billNumber + totalTip) / people).toFixed(2));
      } else {
        setTipAmount("0.00");
        setTotal("0.00");
      }
    };
    
    calculator();
  }, [bill, numberOfPeople, tip]);

  const handleReset = () => {
    setBill(0);
    setNumberOfPeople(1);
    setTip(0);
    setTipAmount("0.00");
    setTotal("0.00");
  };

  const handleTipSelect = (percentage) => {
    setTip(percentage);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl mx-auto max-w-[920px] md:mt-8 font-['Space_Mono'] font-bold">
      <div className="p-6 md:p-8 md:flex md:gap-8">
        
        <div className="md:flex-1 mb-6 md:mb-0">
        
          <div className="mb-8">
            <label className=" text-[#5e7a7d] text-sm mb-2">Bill</label>
            <div className="relative">
              <span className="absolute left-4 top-5 text-[#7f9c9f]"><img src={DollarIcon}></img></span>
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder='0' 
                className={`w-full bg-[#f4fafa] py-3 px-4 pl-10 rounded-md text-right text-[#00494d] text-2xl cursor-pointer ${ notZeroBill ? 'border-[#26c0ab]' : 'border-none' }`}
              />
            </div>
          </div>
          
          
          <div className="mb-8">
            <label className="block text-[#5e7a7d] text-sm mb-2">Select Tip %</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {tipOptions.map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => handleTipSelect(percentage)}
                  className="py-3 rounded-md text-2xl text-white bg-[#00494d] hover:bg-[#26c0ab] hover:text-[#00494d] transition-colors"
                >
                  {percentage}%
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom"
                onChange={(e) => setTip(e.target.value)}
                className="bg-[#f4fafa] py-3 px-4 rounded-md text-center text-[#00494d] text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#26c0ab]"
              />
            </div>
          </div>
          
        
          <div>
            <label className="block text-[#5e7a7d] text-sm mb-2">Number of People</label>
            <div className="relative">
            <span className="absolute left-4 top-5 text-[#7f9c9f]"><img src={PersonLogo}></img></span>
              <input
                type="number"
                placeholder='0' 
                min="1"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className={`w-full bg-[#f4fafa] py-3 px-4 pl-10 rounded-md text-right text-[#00494d] text-2xl cursor-pointer ${ notZero ? 'border-none' : 'border-red-600' }`}
              />
            </div>
          </div>
        </div>
        
        
        <div className="bg-[#00494d] rounded-xl p-6 md:flex-1 md:flex md:flex-col md:justify-between">
          <div className='px-6'>
            <div className="flex justify-between items-center mb-6 mt-8">
              <div>
                <p className="text-white">Tip Amount</p>
                <p className="text-[#7f9c9f] text-sm">/ person</p>
              </div>
              <p className="text-[#26c0ab] text-5xl font-bold">${tipAmount}</p>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <div>
                <p className="text-white">Total</p>
                <p className="text-[#7f9c9f] text-sm">/ person</p>
              </div>
              <p className="text-[#26c0ab] text-5xl font-bold">${total}</p>
            </div>
          </div>
          
          <button
            onClick={handleReset}
            className="w-full bg-[#26c0ab] text-[#00494d] font-bold py-3 rounded-md mt-8 hover:bg-[#a1e8e0] transition-colors"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCard;