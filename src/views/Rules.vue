<template>
    <div>
        <h1 class="main-title">FRAUD AND SCAMPS</h1>
        <div class="rules">
            <p>The most common scam is when they tell you they will be sending you a cashiers check for an amount
                exceeding the cost of the vehicle and then request that you send back the overage, usually by western
                union. The check inevitably bounces and you have already sent thousand of dollars to a scammer out of
                the country and far out of reach from our laws and penal system.

                <p>These Scams are documented and worldwide costing Americans Hundreds of Millions of dollars a year.
                    Please do not fall for any of these scams. Follow the precautions below and be suspicious of every
                    inquiry.</p>

                <p><span>Do not BUY or SELL</span> any cars or ambulances outside the USA.</p>


                <br>
                <p>Do not accept a cashiers check without contacting the 800 number of the issuing bank and validating
                    its authenticity then wait for it to clear the bank before releasing the vehicle. Today anyone can
                    print a check while the banking system has no way of validating it quickly.</p>
        </div>

        <div class="rules-important"><br>
            <p>Scams have involved sending sellers a foreign or out of state cashiers check that was later to be found
                fake. In many cases even a bank cannot determine if a check is fake until it is submitted to the
                issuing bank, often taking 3 weeks and more often 2 weeks after the car is gone.</p>

            <p>In one case a man is on trial for depositing a fake check that he accepted for his vehicle. Now with no
                car, no cash and facing jail time for being a victim.</p>


            <br>
            <p><span>Do NOT Refund</span> an overpayment. Some sellers are faced with a buyer that either sends a check
                or claims to have someone send a check exceeding the sale amount and requesting that the seller pay the
                shipper and refund the balance to the fraudulent buyer. Not only have sellers lost their car they also
                spent their own cash to do it.</p>
        </div>


        <div class="rules"><br>
            <p>Do not give out personal information. We have also had attempts at identity theft. Scammers try to sell
                your car on e-bay using your name and credentials while collecting the money at their PO Box or foreign
                address, leaving the buyer looking for you to get their money back.
                Please take every precaution to protect your identity. Don't give up any information unless your sure
                you have a legitimate buyer. If someone wants to send you a cashiers check no questions asked its most
                likely that they are scamming you.
                If someone is sending you a check for an amount exceeding the vehicle cost and asking you to send back
                the difference, you are being scammed. No one is going to trust a complete stranger in a foreign
                country to send back thousands of dollars.</p>

            <p>It does suck that we have to watch every transaction and be suspect of every inquiry, but the last thing
                you want to do is sell your car and end up with nothing. Or buy a car and have no car to show for it.</p>

        </div>
        <div class="rules-important" style="padding-top:20px;">
            <p>We have implemented new parameters for authorizing accounts and form type e-mail rather than posting
                your e-mail address on the website. Although we maintain your address and personal info in our
                database, we do not post anything besides what you wish to disclose, your phone number, state and zip.
                This is for your protection and to make it more difficult to suck you into one of these scams.</p>

            <p>If you think you may be getting scammed and have questions please contact the US Secret Service. It is
                unlikely you will recover your losses but you may keep the next victim from being taken by these
                scammers.</p>

            <p>You can read more about these scams on almost any automotive website, yet people are being taken daily.
                It's not just individuals, car dealers and businesses alike have been scammed and often enough to close
                them down.</p>
        </div>
    </div>
</template>


<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
}
.rules {
  padding: 0 230px;
  /* font-family: 'Caviar Dreams Bold'; */
}

.rules-important {
  background-color: #e6e6e6;
  /* font-family: 'Caviar Dreams Bold'; */
  padding: 0 230px;
  padding-bottom: 20px;
}

p > span {
  color: #e82224;
}

.main-title {
  text-align: center;
  font-size: 46px;
  padding: 20px 0 40px;
  margin: 0;
  color: white;
  font-family: "Roboto";
  background-color: #f54444;
  -webkit-box-shadow: 0px 12px 114px -24px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 12px 114px -24px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 12px 114px -24px rgba(0, 0, 0, 0.75);
}
</style>
