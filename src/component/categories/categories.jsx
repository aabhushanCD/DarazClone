import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaChevronRight } from "react-icons/fa";
import { categoriesData } from "./data"; // Assume this is your data file

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "200px",
  borderRight: "1px solid #e0e0e0",
  padding: theme.spacing(1),
}));

const SubMenuContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "180px",
  width: "200px",
  padding: theme.spacing(1),
  borderRight: "1px solid #e0e0e0",
}));

const ThirdLevelMenu = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "360px",
  width: "600px",
  padding: theme.spacing(1),
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

function Sidebar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  return (
    <Box display="flex" position="relative">
      <SidebarContainer>
        <List component="nav">
          {categoriesData.map((category, index) => (
            <ListItem
              key={index}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(nul)}
              sx={{
                backgroundColor:
                  hoveredCategory === category ? "#f5f5f5" : "transparent",
                cursor: "pointer",
              }}
            >
              <ListItemText primary={category.name} />
              <FaChevronRight />
            </ListItem>
          ))}
        </List>
        {hoveredCategory && hoveredCategory.subcategories.length > 0 && (
          <SubMenuContainer
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <List component="nav">
              {hoveredCategory.subcategories.map((subcat, index) => (
                <ListItem
                  key={index}
                  onMouseEnter={() => setHoveredSubCategory(subcat)}
                  onMouseLeave={() => setHoveredSubCategory(null)}
                  sx={{
                    backgroundColor:
                      hoveredSubCategory === subcat ? "#f5f5f5" : "transparent",
                    cursor: "pointer",
                  }}
                >
                  <ListItemText primary={subcat.name} />
                  <FaChevronRight />
                </ListItem>
              ))}
            </List>
          </SubMenuContainer>
        )}
        {hoveredSubCategory && hoveredSubCategory.items.length > 0 && (
          <ThirdLevelMenu
            onMouseEnter={() => setHoveredSubCategory(hoveredSubCategory)}
            onMouseLeave={() => setHoveredSubCategory(null)}
          >
            {hoveredSubCategory.items.map((item, index) => (
              <Box key={index} textAlign="center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
                <Typography variant="body2">{item.name}</Typography>
              </Box>
            ))}
          </ThirdLevelMenu>
        )}
      </SidebarContainer>
    </Box>
  );
}

export default Sidebar;
