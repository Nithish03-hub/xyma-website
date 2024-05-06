import React, { useState } from 'react';
import cs from '../Assets/cs.png';
import all1 from '../Images/all1.png';
import all2 from '../Images/all2.png';
import all3 from '../Images/all3.png';
import aluminum from '../Images/al1.png';
import steel1 from '../Images/steel1.png';
import steel2 from '../Images/steel2.png';
import tube1 from '../Images/tube1.png';
import tube2 from '../Images/tube2.png';
import oil1 from '../Images/oil1.png';
import oil2 from '../Images/oil2.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import logo from '../Assets/logo.png';
import share from '../Assets/share.png';
import line from '../Assets/line.png';
import arrow from '../Assets/arrow.png';
import vector from '../Assets/Vector.png';

const Resource = () => {
    const [displayContent, setDisplayContent] = useState(true);
    const [selectedWord, setSelectedWord] = useState('All');

    const toggleContent = (word) => {
        setSelectedWord(word);
        if (word === 'All') {
            setDisplayContent(true); 
        } else {
            setDisplayContent(!displayContent);
        }
    };

    return (
        <div>
            <section>
                <div>
                    <img src={cs} alt="Case Studies" />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <div className='text-white text-5xl font-bold mt-4 sm:mt-24'>
                            Case Studies
                        </div>
                        <div className='text-sm text-white mt-5 ml-12' style={{ width: '88%' }}>
                            Xyma Analytics Case Studies are documented examples illustrating the application and effectiveness of Xyma Analytics' solutions in real-world scenarios
                        </div>
                    </div>
                </div>
            </section>

            <section>
              <div className='flex'>
                <div style={{width:'20%',marginLeft:'5%',marginTop:'12%'}}> 
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'All' ? '#013872':'black' }} onClick={() => toggleContent('All')}>
                            All
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Aluminum' ? '#013872':'black' }} onClick={() => toggleContent('Aluminum')}>
                            Aluminum
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Steel' ? '#013872':'black' }} onClick={() => toggleContent('Steel')}>
                            Steel
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Refineries' ? '#013872':'black' }} onClick={() => toggleContent('Refineries')}>
                            Refineries
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Lubricants' ? '#013872':'black' }} onClick={() => toggleContent('Lubricants')}>
                            Lubricants
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Oil Recovery' ? '#013872':'black' }} onClick={() => toggleContent('Oil Recovery')}>
                            Oil Recovery
                        </span>
                    </p>
                    <p>
                        <span style={{ cursor: 'pointer',color: selectedWord === 'Paints' ? '#013872':'black' }} onClick={() => toggleContent('Paints')}>
                            Paints
                        </span>
                    </p>
                 </div>
                  <div > 
                    {displayContent && (selectedWord === 'Aluminum' || selectedWord === 'All') && (
                         <div className='border border-gray-200 rounded-2xl p-3 flex ' style={{width:'70%',marginLeft:'10%',marginTop:'10%'}}>
                         <span className='text-xl'>Aluminum</span>
                         <div style={{ position: 'relative', display: 'inline-block',marginTop:'6%',marginRight:'5%' }}> 
                           <img style={{ width: '95%' }} src={aluminum} alt="Aluminum Image" />
                           <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '45%', left: '68%',width:'22%',height:'7%' }}>Case Studies</button>
                           <p style={{width:'90%',fontSize:'20px',marginTop:'20px'}}>A 10°C temperature deviation reduces efficiency, promotes anode effect, and increases PFC emissions.</p>
                         </div>
 
                         <div>  
                           <span className='text-xl'>All</span>
                           <div className='flex mt-4'>
                             <div >
                               <img style={{width:'65%',marginLeft:'25%',marginTop:'6px'}}src={all1}></img>
                             </div>
                               <p  style={{width:'65%',fontSize:'18px'}}>A 10°C shift lowers efficiency, boosts anode effect, and raises PFC emissions.</p>
                           </div>
                                                       
                          
                           <div className='flex mt-6'> 
                             <div>
                             <hr class="ml-9 mt-2 border border-gray-200" style={{width:'220%'}} />
                               <img style={{width:'65%',marginLeft:'25%',marginTop:'15px'}}src={all2}></img>
                             </div>
                               <p  style={{width:'68%',fontSize:'18px',marginTop:'20px'}}>Extending the ladle life for one cycle would result in steel production worth $5.1 million.</p>
                           </div>
 
                           <div className='flex mt-6'>
                             <div>
                             <hr class="ml-10 border border-gray-200" style={{width:'220%'}} />
                               <img style={{width:'65%',marginLeft:'25%',marginTop:'16px'}}src={all3}></img>
                             </div>
                               <p  style={{width:'65%',fontSize:'18px',marginTop:'20px'}}>20°C rise halves reformer tube lifespan; design temperature crucial.</p>
                           </div>
 
                         </div>
                       </div>
                    )}
                    {displayContent && (selectedWord === 'Steel' || selectedWord === 'All') && (
                        <div className='border border-gray-200 rounded-2xl p-3 flex ' style={{width:'70%',marginLeft:'10%',marginTop:'3%'}}>
                        <div className='text-xl'>Steel</div>
                        <div style={{ position: 'relative', display: 'inline-block',marginTop:'6%',marginLeft:'5%' }}> 
                          <img style={{ width: '100%' }} src={steel1} alt="Steel Image" />
                          <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '38%', left: '70%',width:'24%',height:'7%' }}>Case Studies</button>
                          <p style={{width:'95%',fontSize:'20px',marginTop:'20px'}}>Extending ladle life for one cycle yields steel worth $5.1M</p>
                        </div>

                        <div>  
                          <div>
                            <button className=" text-white py-2 px-3 rounded-full text-xs mt-2" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',marginLeft:'72%'}}>
                               Read More
                            </button>
                          </div>
                          <div style={{ position: 'relative', display: 'inline-block',marginTop:'0%',marginLeft:'15%' }}> 
                              <img style={{width:'80%',marginLeft:'10%',marginTop:'2%'}}src={steel2}></img>
                              <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '37%', left: '62%',width:'22%',height:'7%' }}>Case Studies</button>
                              <p  style={{width:'95%',fontSize:'20px',marginTop:'10%',marginLeft:'10%'}}>Extending the lifespan of the ladle for one cycle results in producing steel valued at $5.1 million</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {displayContent && (selectedWord === 'Refineries' || selectedWord === 'All') && (
                         <div className='border border-gray-200 rounded-2xl p-3 flex ' style={{width:'70%',marginLeft:'10%',marginTop:'3%'}}>
                         <div className='text-xl'>Refineries</div>
                         <div style={{ position: 'relative', display: 'inline-block',marginTop:'6%' }}> 
                           <img style={{ width: '85%' }} src={tube1} alt="Tube Image" />
                           <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '38%', left: '60%',width:'22%',height:'7%' }}>Case Studies</button>
                           <p style={{width:'95%',fontSize:'20px',marginTop:'20px'}}>A 20°C temperature rise cuts reformer tube lifespan by half</p>
                         </div>
 
                         <div>  
                           <div>
                             <button className=" text-white py-2 px-3 rounded-full text-xs mt-2" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',marginLeft:'70%',width:'23%',height:'25%'}}>
                                Read More
                             </button>
                           </div>
                           <div style={{ position: 'relative', display: 'inline-block',marginTop:'0%',marginLeft:'1%' }}> 
                               <img style={{width:'85%',marginLeft:'8%',marginTop:'2%'}}src={tube2}></img>
                               <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '37%', left: '65%',width:'22%',height:'7%' }}>Case Studies</button>
                               <p  style={{width:'95%',fontSize:'20px',marginTop:'8%',marginLeft:'6%'}}>A 20°C temperature increase halves the lifespan of reformer tubes</p>
                           </div>
                         </div>
                       </div>
                    )}
                    {displayContent && (selectedWord === 'Lubricants' || selectedWord === 'All') && (
                         <div className='border border-gray-200 rounded-2xl p-3 flex ' style={{width:'70%',marginLeft:'10%',marginTop:'3%'}}>
                         <div className='text-xl'>Lubricants</div>
                         <div style={{ position: 'relative', display: 'inline-block',marginTop:'6%' }}> 
                           <img style={{ width: '85%' }} src={oil1} alt="Oil Image" />
                           <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '38%', left: '60%',width:'22%',height:'7%' }}>Case Studies</button>
                           <p style={{width:'95%',fontSize:'20px',marginTop:'20px'}}>30% of maintenance budget influenced by lubricants, highlighting their significant role in operational expenses</p>
                         </div>
 
                         <div>  
                           <div>
                             <button className=" text-white py-2 px-3 rounded-full text-xs mt-2" style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)',marginLeft:'70%',width:'25%',height:'25%'}}>
                                Read More
                             </button>
                           </div>
                           <div style={{ position: 'relative', display: 'inline-block',marginTop:'0%', }}> 
                               <img style={{width:'95%',marginLeft:'1%',marginTop:'4%'}}src={oil2}></img>
                               <button className='bg-white rounded-full text-xs' style={{ position: 'absolute', bottom: '37%', left: '70%',width:'22%',height:'7%' }}>Case Studies</button>
                               <p  style={{width:'95%',fontSize:'20px',marginTop:'6.5%',marginLeft:'1%'}}>Lubricants significantly affect operational costs, accounting for 30% of the maintenance budget</p>
                           </div>
                         </div>
                       </div>
                    )}
                    </div> 
                </div>
            </section>




            <div className="h-[60vh] mt-24" style={{ background: 'linear-gradient(90deg, #00133D 0%, #01285C 100%)' }}>     

    <div className='flex justify-center items-center '>
        <div className='mt-[-50px] h-28 md:mb-20 rounded-3xl w-full md:max-w-6xl' style={{ background: 'linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)' }}>
            <div className='flex flex-col md:flex-row items-center justify-between' style={{ marginBottom: '20px' }}>
                <div className='md:ml-10 md:mt-3.5 text-white text-xl md:text-3xl text-center md:text-left'>
                    Enhance Process Efficiency through<br />
                    XYMA Analytics' Innovations
                    <img className='mb-1 w-full md:w-40 mx-auto md:ml-40' src={vector} alt="Vector Image" />
                </div>
                <div className='md:mr-10 md:mt-5 text-xs mt-5 md:text-right'>
                    <button className='bg-[#01285C] text-white rounded-full w-36 h-10 md:w-36 md:h-10'>Get in Touch</button>
                    <button className='bg-white text-[#01285C] rounded-full w-36 h-10 md:w-36 md:h-10 ml-4 md:ml-8 md:mr-4 mb-2 md:mt-0'>Download Brochure</button>
                </div>
            </div>
            <div className='mt-16 text-white flex flex-col md:flex-row'>
                <div className="flex flex-col items-center md:items-start">
                    <img className='w-32 h-14' src={logo} alt="Logo"></img>
                    <div className='text-white text-xs w-56 mt-2'>
                        Patented Ultrasonic Waveguide based sensors for preventing unplanned downtime and enhancing process efficiency.
                    </div>
                    <div className='flex gap-3 mt-4'> 
                        <img className='w-6 h-6' src={twitter} alt="Twitter"></img>
                        <img className='w-6 h-6' src={linkedin} alt="LinkedIn"></img>
                        <img className='w-6 h-6' src={share} alt="Share"></img>
                    </div>
                </div>

                <div className='text-xs mr-8 md:mr-24 ml-8 md:ml-28 mt-4 md:mt-0'>
                    <div className='font-semibold mb-5 text-sm'>Quick Links <img className='mt-1 h-0.5 w-5' src={line}/></div>
                    <div className='mb-3'>About Us</div>
                    <div className='mb-3'>Career</div>
                    <div className='mb-3'>Media</div>
                    <div className='mb-3'>Resources</div>
                </div>
                <div className='text-xs mr-8 md:mr-24 mt-4 md:mt-0'>
                    <div className='font-semibold mb-5 text-sm '>Products <img className='mt-1 h-0.5 w-5' src={line}/></div>
                    <div className='mb-3'>μTMapS</div>
                    <div className='mb-3'>PoRTS</div>
                    <div className='mb-3'>Ztar</div>
                    <div className='mb-3'>I-PAMS</div>
                </div>
                <div className='text-xs mr-8 mt-4 md:mt-0'>
                    <div className='font-semibold mb-5 text-sm '>Support <img className='mt-1 h-0.5 w-5' src={line}/></div>
                    <div className='mb-3'>Contact Us</div>
                    <div className='mb-3'>Contact Sales</div>
                </div>
                <div style={{marginLeft:'140px',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px', gap: '10px', width: '220px', height: '84px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px', flex: 'none', order: '4', flexGrow: '0'}}>
                  <div>Subscribe Now</div>
                  <form class="flex items-center"> 
                    <input type="email" class="text-xs w-40 h-8 rounded-md pl-3" placeholder="Enter your email" required/>
                    <img class="w-7 h-7 ml-2" src={arrow}/> 
                  </form>
                </div>
            </div> 
            <div className="h-0.5 mt-10" style={{ background: '#013872' }}/> 
            <div className='text-white mt-6 text-xs'>© 2022 XYMA Analytics Inc. <span className='text-gray-400'>IIT Madras Research Park, Chennai, 600113</span> <span className='ml-96'>Terms & Conditions</span>
             <span className='ml-6'>Privacy Policy</span>
            </div>
            
              
            
        </div>
    </div>  

</div>
        </div>
    );
}

export default Resource;