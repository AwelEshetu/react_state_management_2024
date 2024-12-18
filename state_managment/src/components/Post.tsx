import React, { memo } from 'react'
import {PostItem} from '../app/types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Chip } from '@mui/material';
interface PostProps {
  post: PostItem;
  handleLike: (post: PostItem) => void;
  handleDislike: (post: PostItem) => void;
}
const Post: React.FC<PostProps> = ({ post, handleDislike, handleLike }) => {
  
    return (
        <Card sx={{ maxWidth: 750, border: '1px dashed', mb:1}}>
            <CardContent>
                <Typography aria-label="title" variant="h5" sx={{mb:1 }} color="textPrimary" fontFamily="cursive">{post.title}</Typography>
                <Typography aria-label="body" variant="body2" color="textSecondary" align="left" fontFamily="cursive">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent: "space-between"}}>
                <Box sx={{justifyContent: "flex-start"}}>
                    <IconButton aria-label="likes" color="primary" onClick={()=> handleLike(post)}>
                        <ThumbUpOffAltIcon/> <span style={{fontSize:"small"}}>{post.reactions.likes}</span>
                    </IconButton>
                    <IconButton aria-label="dislikes" color="warning" onClick={()=> handleDislike(post)}>
                        <ThumbDownOffAltIcon/><span style={{fontSize:"small"}}>{post.reactions.dislikes}</span>
                    </IconButton>
                </Box>
                <Box sx={{justifyContent: "flex-end"}}>
                    {
                        post.tags.map((tag, index) => (
                        <Chip key={index} size="small" variant="outlined" label={tag} style={{fontSize:"small"}}/>
                        ))
                    }
                </Box>
            </CardActions>
        </Card>
    )
};

export default memo(Post);
