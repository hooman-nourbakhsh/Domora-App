import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    realEState: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["villa", "apartment", "store", "office"],
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
