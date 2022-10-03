import React from 'react';
import {BreadCrumb} from "../../components/general/breadcrumb";
import FirstLead from "../../components/leadship/firstLead";
import SecondLead from "../../components/leadship/secondLead";
import {ThirdLead} from "../../components/leadship/thirdLead";
import {FourthLead} from "../../components/leadship/fourthtLead";
import { FivthLead } from '../../components/leadship/fiveLead';
import { SixthLead } from '../../components/leadship/sixLead';

const Leadership = () => {

  return (
    <div className="pb-32">
      <div className="container w-[1196px] m-auto ">
        <BreadCrumb />
      </div>
      <FirstLead />
      <SecondLead />
      <ThirdLead />
      <FourthLead />
      <FivthLead />
      <SixthLead />
    </div>
  );
};;

export default Leadership;