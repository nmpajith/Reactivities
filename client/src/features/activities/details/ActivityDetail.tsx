import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Prop = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

export default function ActivityDetail({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Prop) {
  const { activities } = useActivities();
  const activity = activities?.find((a) => a.id === selectedActivity.id);
  if (!activity) return <div>Activity not found</div>;
  return (
    <Card sx={{ p: 1, borderRadius: 3 }}>
      <CardMedia
        component={"img"}
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openForm(activity.id)} color="primary">
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
