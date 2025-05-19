import Domain from "./Domain/Language.domain";
import Service from "./Service/Language.service";
import Creators from "../../../Helpers/Creators/Creators";
import APIRequest from "Logic/Core/API/API";

const Modules = Creators.createModule("LanguageModule", {
	domain: new Domain(),
	service: new Service(APIRequest),
});

export default Modules;
