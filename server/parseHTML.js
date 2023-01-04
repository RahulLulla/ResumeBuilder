const parseHTML = (content, resumeData) => {
  content = content.replace(
    "{profile-fullName}",
    resumeData.firstName + " " + resumeData.lastName
  );
  content = content.replace("{profile-phoneNumber}", resumeData.phoneNumber);
  content = content.replace("{profile-email}", resumeData.email);
  content = content.replace("{profile-website}", resumeData.website);
  content = content.replace(
    "{profile-address}",
    resumeData.city + ", " + resumeData.state
  );
  content = content.replace("{profile-company1Pos}", resumeData.company1Pos);
  content = content.replace(
    "{profile-company1Exp}",
    "@ " + resumeData.company1Exp
  );
  content = content.replace(
    "{profile-company1Duration}",
    resumeData.company1Duration
  );
  content = content.replace("{profile-company1Desc}", resumeData.company1Desc);
  content = content.replace("{profile-company2Pos}", resumeData.company2Pos);
  content = content.replace(
    "{profile-company2Exp}",
    "@ " + resumeData.company2Exp
  );
  content = content.replace(
    "{profile-company2Duration}",
    resumeData.company2Duration
  );
  content = content.replace("{profile-company2Desc}", resumeData.company2Desc);
  content = content.replace(
    "{profile-projectTitle1}",
    resumeData.projectTitle1
  );
  content = content.replace("{profile-projectLink1}", resumeData.projectLink1);
  content = content.replace("{profile-projectDesc1}", resumeData.projectDesc1);
  content = content.replace(
    "{profile-projectTitle2}",
    resumeData.projectTitle2
  );
  content = content.replace("{profile-projectLink2}", resumeData.projectLink2);
  content = content.replace("{profile-projectDesc2}", resumeData.projectDesc2);
  content = content.replace(
    "{profile-projectTitle1}",
    resumeData.projectTitle1
  );
  content = content.replace("{profile-skill1}", resumeData.skill1);
  content = content.replace("{profile-skill2}", resumeData.skill2);
  content = content.replace("{profile-skill3}", resumeData.skill3);
  content = content.replace("{profile-skill4}", resumeData.skill4);
  content = content.replace("{profile-skill5}", resumeData.skill5);
  content = content.replace("{profile-skill6}", resumeData.skill6);

  content = content.replace("{profile-collegeQual}", resumeData.collegeQual);
  content = content.replace("{profile-college}", resumeData.college);
  content = content.replace(
    "{profile-collegeYears}",
    resumeData.collegeStart + "-" + resumeData.collegeEnd
  );
  content = content.replace("{profile-collegeDesc}", resumeData.collegeDesc);
  content = content.replace("{profile-schoolQual}", resumeData.schoolQual);
  content = content.replace("{profile-school}", resumeData.school);
  content = content.replace(
    "{profile-schoolYears}",
    resumeData.schoolStart + "-" + resumeData.schoolEnd
  );
  content = content.replace("{profile-schoolDesc}", resumeData.schoolDesc);

  content = content.replace("{profile-interest1}", resumeData.interest1);
  content = content.replace("{profile-interest2}", resumeData.interest2);
  content = content.replace("{profile-interest3}", resumeData.interest3);
  content = content.replace("{profile-interest4}", resumeData.interest4);
  content = content.replace("{profile-interest5}", resumeData.interest5);
  content = content.replace("{profile-interest6}", resumeData.interest6);

  content = content.replace("{profile-linkedIn}", resumeData.linkedIn);
  content = content.replace("{profile-github}", resumeData.github);
  content = content.replace("{profile-twitter}", resumeData.twitter);
  return content;
};
module.exports = parseHTML;
