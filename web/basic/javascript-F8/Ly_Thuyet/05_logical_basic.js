//cau 1
function isSchoolAge(age) {
    if (age >= 6 && age <= 18)
        return true;
    else
        return false;
}
(isSchoolAge(15)) ? console.log('To ru') : console.log('pho on');

//cau 2
function isHealthy(heartRate, temperature) {
    if (heartRate >= 60 && heartRate <= 100 && temperature >= 36.5 && temperature <= 37.5)
        return true;
    else
        return false;

}

//cau 3
function canAttendTechSeminar(age, isITEmployee, hasRegistered) {
    if (age >= 18 && isITEmployee && hasRegistered)
        return true;
    else
        return false;
}

//cau 4
function canPurchaseCarInsurance(age, hasLicense, noAccidents) {
    if (age >= 21 && hasLicense && !noAccidents)
        return true;
    else
        return false;
}

//cau 5
function canJoinFootballTeam(age, hasExperience) {
    if (age >= 18 && age <= 35 && hasExperience)
        return true;
    else
        return false;
}

//cau 6
function isBankAccountValid(isIdentityVerified, balance) {
    if (isIdentityVerified && balance >= 100)
        return true;
    else
        return false;
}

//cau 7
function canParticipateInMarathon(age, hasTrained) {
    if (age >= 18 && hasTrained)
        return true;
    else
        return false;
}

//cau 8
function canEnrollCookingClass(lovesCooking, noFoodAllergies) {
    if (lovesCooking && noFoodAllergies)
        return true;
    else
        return false;
}

//cau 9
function canOrganizeMusicFestival(teams, finance, bestWeather) {
    if (teams >= 5 && finance && bestWeather)
        return true;
    else
        return false;
}

//cau 10
function canOpenNewStore(location, finance, staffHaveExp) {
    if (location && finance >= 10000000 && staffHaveExp >= 3)
        return true;
    else
        return false;
}

//cau 11
function isCapableProjectManager(exp, tech, communicate) {
    if (exp && tech && communicate)
        return true;
    else
        return false;
}

//cau 12
function canJoinExchangeProgram(score, introduced, violate) {
    if ((score >= 8 || introduced) && !violate)
        return true;
    else
        return false;
}

//cau 13
function planSportEvent(mem, finance, event) {
    if (mem >= 50 && finance <= 10000 && !event)
        return true;
    else
        return false;
}

//cau 14
function isvestmentDecitsion(risk, roi) {
    if ((risk === 'low' || risk === 'medium') && roi >= 10)
        return true;
    else if (risk === 'hight' && roi >= 20)
        return true;
    else
        return false;
}

//cau 15
function determineTravelPlan(weather, finance, favorite) {
    if (!weather)
        return 'Hoan';
    else if (finance <= 5000)
        return 'dia phuong';
    else if (favorite)
        return 'nui';
    else if (!favorite)
        return 'bien';
}

//cau 16
function determineStudentCategory(score, attend) {
    if (score >= 90 && attend >= 50)
        return 'xuat sac';
    else if (score >= 75 && attend >= 70)
        return 'gioi';
    else if (score >= 60 && attend >= 60)
        return 'kha';
    else if (score < 60 || attend >= 50)
        return 'trung binh';
    else
        return 'cai thien';
}

//cau 17
function hasAccessToWorkroom(manager, card, test) {
    if (manager && card && test)
        return true;
    else
        return false;
}