"use client"
import React from 'react'
import styled from 'styled-components'

const Terms = () => {



    return (
        <Wrapper>
            <div className="cont">
                <h2 className="py-8 font-extrabold">Terms and Conditions</h2>
                <ul>
                    <li>There is no Contract between the company and the client until the company has received the initial deposit amount per person as specified for each tour package. The full payment must be received in accordance with procedures laid down under Payments Terms. If not paid in that time, the company reserves the right to cancel the booking with consequent loss of deposit and apply scale of cancellation charges as mentioned in the cancellation policy here under.</li> <br />
                    <li>
                        To amend, alter, vary or withdraw any tour, holiday, excursion or facility it has advertised or published or to substitute an Independent Contractor of similar class if it is deemed advisable or necessary. In either case, the Company shall not be liable for any damage, additional expense, or consequential loss suffered by the Clients or for any compensation claims made.
                    </li> <br />
                    <li>Car AC will not work in Hilly Areas.</li> <br />
                    <li>It is clear understanding between either parties that any loss arising on account of cancellation of Might / train / bus tickets booked by the Clients; either through the Company or on his/her own or through a third party; the Company shall not be liable for such losses or additional expense, or consequential loss suffered by the Clients.</li> <br />
                    <li>
                        No person other than the Company, in writing, has the authority to vary, add, amplify or waive any stipulation, representation, term or condition in this brochure.
                    </li> <br />
                    <li>
                        HEALTH & SAFETY The Company shall in no circumstances whatsoever will be liable to the Client or any person traveling for: Any death personal injury, sickness, accident, loss , delay , discomfort ,increased expenses, consequential loss and / or damage or any misadventure howsoever caused Any act, omission, default or Independent Contractor or other person or be any servant or agent , employed by them who may be engaged or concerned in the provision of accommodation, refreshment, carriage facilities or service for the Client or for any person travelling with him howsoever caused.
                    </li> <br />
                    <li>
                        Any claim or complaint by the Client must be noti&ed to the Company in writing within 7 days of the end of this holiday tour. No claim notified to this Company beyond this period will be entertained and the Company shall incur no liability whatsoever in respect thereof.
                    </li> <br />
                    <li>
                        INSURANCE The tour cost does not include the costs towards the insurance premium. Hence, it is advisable that the clients get insurance cover at their own costs. However, please note that the Client has to deal directly with the insurance providing company in case of settlement of any claims whatsoever.
                    </li> <br />
                    <li>
                        FORCE MAJORED Acts of god (including exceptional adverse weather conditions), earthquake, fire , war (declared or undeclared), invasion, rebellion, revolt, riot, civil commotion, civil war, nuclear &ssion, strike, act(s) of omission/commission by any concerned government(s), or government agencies, judicial or quasi-judicial authorities, occurrence of any event can force the Company to change or extended. Hence any additional expenditure occurred due to the above reasons the same will be borne by the passengers.
                    </li> <br />
                </ul>
            </div>
        </Wrapper>

    );
}

const Wrapper = styled.div`
  background-color: #e3dfdf;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  .cont {
    width: 70%;
    margin: 0 auto;
    padding: 2% 5%;
    
    background-color: white;
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    p,
    strong {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
        h2{
            font-size: 14px;
        }
      strong, p ,li{
        font-size: 12px; /* Decrease font size for smaller screens */
      }
    }
  }
`;

export default Terms
