import React, { memo } from 'react'
import {PostItem} from '../app/types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Chip, Container } from '@mui/material';
import { postsApiSlice } from '../features/posts/postsApi';
interface PostProps {
  post: PostItem;
}
const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <Card sx={{ maxWidth: 750, border: '1px dashed', mb:1}}>
            <CardContent>
                <Typography aria-label="title" variant="h5" sx={{mb:1 }} color="textPrimary" fontFamily="cursive">{post.title}</Typography>
                <Typography aria-label="body" variant="body2" color="textSecondary" align="left" fontFamily="cursive">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="likes" color="primary">
                    <ThumbUpOffAltIcon/> <span style={{fontSize:"small"}}>{post.reactions.likes}</span>
                </IconButton>
                <IconButton aria-label="dislikes" color="warning">
                    <ThumbDownOffAltIcon/><span style={{fontSize:"small"}}>{post.reactions.dislikes}</span>
                </IconButton>
                {
                    post.tags.map((tag, index) => (
                    <Chip key={index} size="small" variant="outlined" label={tag} style={{fontSize:"small"}}/>
                    ))
                }
            </CardActions>
        </Card>
    )
};

export default memo(Post);
