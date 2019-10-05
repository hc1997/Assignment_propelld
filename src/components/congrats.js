import React from "react";
import { Link } from "react-router-dom";


export default class Congo extends React.Component {
    render() {
        return (
            <div>
                <p className='text-center'>
                    <img
                        className='mb-3 mt-4'
                        src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-check-mark-4.png'
                        alt='...'
                        style={{ width: "50px" }}
                    />
                    <h1>Congratulations!</h1>
                    you satisy our minimum eligibility criteria for loan processing. Please complete your KYC and
                    document verfication process to complete the loan application.
    </p>
                <p className='text-center'>
                    <Link to ='/kyc' class='btn btn-primary ' role='button' aria-pressed='true'>
                        Continue
      </Link>
                </p>
            </div>
        )
    }
}