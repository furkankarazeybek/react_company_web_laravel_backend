class AppUrl {

    static BaseURL = 'http://127.0.0.1:8000/api';

    static HomeTopTitle = this.BaseURL+"/homepage/title";
    static HomeTechDesc = this.BaseURL+"/techhome";
    static TotalHomeDetails = this.BaseURL+"/totalHome";

    static ProjectDetails = this.BaseURL+"/projectdetails/";  //id
    static ProjectAll = this.BaseURL+"/projectall";
    static ProjectHome = this.BaseURL+"/projecthome";

    static Services = this.BaseURL+"/services";

    static Information = this.BaseURL+"/information";

    static FooterData = this.BaseURL+"/footerdata";

    static ApplicationHome = this.BaseURL+"/applicationhome";
    static ApplicationAll = this.BaseURL+"/applicationall";
    static ApplicationDetails = this.BaseURL+"/applicationdetails/"; //id

    static ContactSend = this.BaseURL+"/contactsend";

    static ClientReview = this.BaseURL+"/clientreview";

    static ChartData = this.BaseURL+"/chartdata";



  
}

export default AppUrl