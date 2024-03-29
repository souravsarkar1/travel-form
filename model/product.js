const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    hotel: {
      name: { type: String },
      address: { type: String },
      website: { type: String },
      userName: { type: String, required: true },
      password: { type: String, required: true },
    },
    propertyInformation: {
      scopeOfRenovation: [{ type: String }],
      stateOfRepair: { type: String },
      propertyType: { type: String },
      rating: { type: Number },
      numberofRooms: { type: Number },
      LGBTQIFriendly: { type: String },
      Design: { type: String },
      isAdultOnly: { type: Boolean },
      propertymap: { type: String },
      lastRenovated: { type: Date, default: new Date() },
      thirdPartyReviewsaorAwards: { type: String },
      ecoAwardsOrCertification: { type: String },
      wifi: { type: String },
      uniqueSellingPoints: { type: String },
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      city: { type: String },
      roadAndNumber: { type: Number },
      suburb: { type: String },
      postCode: { type: Number },
      country: { type: String },
      state: { type: String },
      atoll: { type: String },
    },
    healthSafety: {
      lastReviewDate: { type: Date, default: Date.now },
      rating: { type: Number, default: 0.0 },
      comments: { type: String },
      policyForEvacuation: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      medicalEmergencyPolicy: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      doctorOnSite: { type: String },
      doctorIsPermanent: { type: String },
      nurseOnsite: { type: String },
      nurseIsPermanent: { type: String },
      onPremiseQualifications: { type: String },
      defibrillatorsOnProperty: { type: String },
      defibrillatorsByPool: { type: String },
      nearestClinicHospital: { type: String },
      specialitiesOfNearestHospital: { type: String },
      nearestChildrenHospital: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    transferOptions: {
      weatherlimited: { type: String },
      timeLimitedbyTransferType: { type: String },
      hotelFacilitatesTransferBooking: { type: String },
      qualityofBoats: { type: String },
      transferOption: { type: String },
      boatschedules: { type: String },
      seaplaneSchedules: { type: String },
      seaplaneProvider: { type: String },
      domesticAirlineSchedules: { type: String },
      likelihoodofDelays: { type: String },
      distanceOrTimeFromMale: { type: String },
      meetAndGreetAtAirport: { type: String },
    },
    features: {
      fullBoard: { type: String },
      halfBoard: { type: String },
      breakfastIncluded: { type: String },
    },
    beach: {
      beachType: [{ type: String }],
      length: { type: Number, default: 0 },
      features: { type: String },
      instagramSpots: { type: String },
      tidesRips: { type: String },
      hoursofLifeguardDuty: { type: Number, default: 0 },
      areoffBeachPatrolledbyLifeguards: { type: String },
      lifeguardQualifications: [{ type: String }],
      areSomePartsofTheBeachOnlyForPrivateUse: { type: String },
      willBeachVillasbeDisturbed: { type: String },
      cleanliness: { type: String },
      include: { type: String },
      BBQSpots: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },

    reef: {
      entryPointSandLengthofSwim: { type: String },
      accessibleFromBeach: [{ type: String }],
      houseReefAccessiblebyBoat: { type: String },
      houseReefAccessibleCost: { type: Number },
      accessiblebyBoat: { type: String },
      costTravel: { type: Number },
      travelTime: { type: Number },
      sites: { type: String },
      outerReef: { type: String },
      qualityOfCoral: { type: String },
      houseReef: { type: String },
      distanceFromBeach: { type: String },
      qualityofFish: { type: String },
      nearestOtherReefforGoodCoral: { type: String },
      onsiteMarineBiologist: { type: String },
      entryPointsAndLengthOfSwim: { type: String },
      abundanceOfReefSharks: { type: String },
      reviewsSentiments: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    waterSports: {
      diving: { type: String },
      affiliation: { type: String },
      sites: { type: String },
      languagesSpoken: { type: String },
      submarineTour: { type: String },
      costs: { type: Number },
      maximumOccupancy: { type: Number },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      whatflotationDevicesProvided: { type: String },
      minimumAge: { type: String },
      equipmentProvided: { type: String },
      otherServices: { type: String },
      nameOfSurfSite: { type: String },
      reviewsSentiments: { type: String },
    },
    gym: {
      qualityOfEquipment: { type: String },
      rangeofEquipment: [{ type: String }],
      spaPreBookingAdvised: { type: String },
      classes: { type: String },
      specialistMachines: { type: String },
      trainerOnSite: { type: String },
      cost: { type: Number },
      openingTimes: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      reviewsSentiments: { type: String },
    },
    activities: {
      activitiesAvailable: [{ type: String }],
      stingrayOrFishFeeding: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
      cost: { type: Number },
    },
    spa: {
      typesServices: { type: String },
      reviewsSentiments: { type: String },
      numberOfRooms: { type: Number },
      preBookingAdvised: { type: String },
      cost: { type: Number },
      hours: { type: Number },
    },
    kidsClub: {
      ratioofStafftoChildren: { type: Number },
      staffQualifications: [{ type: String }],
      languagesSpoken: [{ type: String }],
      hours: { type: Number },
      cost: { type: Number },
      preBbookingAdvised: { type: String },
      agesAccommodated: { type: String },
      activities: [{ type: String }],
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    foodAndBeverage: {
      InclusionsOrExclusionsforFullOrhalfBoard: { type: String },
      extraCostForRoomService: { type: String },
      numberOfBarsAndNames: { type: String },
      hoursOfOperation: { type: String },
      specialties: { type: String },
      reviewsSentiments: { type: String },
      numberOfRestaurantsandNames: { type: String },
      typesOfCuisine: { type: String },
      halaalOption: { type: String },
      kidsMenu: { type: String },
      roomService: { type: Boolean },
      seviewsSentiments: { type: String },
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
    services: {
      trainingOrQualifications: { type: String },
      needToPreBook: { type: String },
      safetyFeatures: { type: String },
      isNannyavAilable: { type: String },
      cost: { type: String },
    },
    pool: {
      length: { type: Number, default: 0 },
      depth: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      lapPool: { type: String },
      safetyFeatures: [{ type: String }],
      totalNumberOfPool: { type: Number },
      reviewsSentiments: { type: String },
      IsadultOnly: { type: Boolean },
      kidsFeatures: [{ type: String }],
      heated: { type: String },
      cleanliness: { type: String },
    },
    rooms: {
      // maxOccupancy: ,
      maxOccupancyAdult: { type: Number, default: 0 },
      maxOccupancyChild: { type: Number, default: 0 },
      //adultAndChildCombinations: { type: Number, default: 0 },
      NeedtoPreBookExtraBedding: { type: String },
      safetyFeaturesifOverwaterBungalow: [{ type: String }],
      safetyFeaturesForBalcony: [{ type: String }],
      safetyFeaturesForPool: [{ type: String }],
      commentsOnHowPrivacyIsImpacted: { type: String, default: '' },
      interconnected: { type: String },
      noiseAtNight: { type: String },
      privacyLevelsGoodEnoughForStrictMuslim: { type: String },
      movieSystemsOrDVDs: { type: String },
      roomName: { type: String },
      numberOfRooms: { type: String },
      reviewsSentiments: { type: String },
      roomSize: { type: Number },
      childAgeCategory: { type: String },
      cotAllowedAndcost: { type: String },
      rollawayBedAllowedAndCost: { type: String },
      roomLayoutMap: { type: String },
      separateToilet: { type: String },
      separateLivinRoomwoutDoor: { type: String },
      needToPreBookExtrabedding: { type: String }, //(limited availability)
      numberOfBathrooms: { type: Number },
      bath: { type: String },
      freeWifi: { type: Boolean },
      balconyPatio: { type: String },
      privatePool: { type: String },
      dimensionsOfPool: { type: String },
      poolHeated: { type: String },
      overwater: { type: String },
      beachAccess: { type: String },
      isTV: { type: Boolean },
      ironIroningBoard: { type: Boolean },
      teaOrCoffeeOrKettle: { type: Boolean },
      isMicrowave: { type: Boolean },
      musicSystem: { type: String },
      laundryService: { type: String },
      kitchenFacilitiesAndWhatFacilities: { type: String },
      safe: { type: String },
      pillowMenu: { type: String },
      blackoutCurtains: { type: String },
      FanOrAC: { type: String },
      babyBath: { type: String },
      babyMonitor: { type: String },
      childrensToys: { type: String },
      childrensCutlery: { type: String },
    },
    media: {
      images: [
        {
          title: { type: String },
          url: { type: String },
        },
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = { ProductModel };
