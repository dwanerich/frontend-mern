import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Post = () => {
  return (
    <Card sx={{ maxWidth: 2000}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://img.stadiumgoods.com/16/44/31/35/16443135_34395257_2048.jpg"
          alt="Jordan 1's"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jordan 1's
          </Typography>
          <Typography variant="body2" color="text.secondary">
            B&W classics for the sneaker heads...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Post
