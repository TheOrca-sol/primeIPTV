import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const StatusBadge = styled.span`
  background: ${props => props.active ? '#10B981' : '#EF4444'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 1rem;
  width: 100%;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const Value = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const TabContainer = styled.div`
  margin-bottom: 2rem;
`;

const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : 'rgba(37, 99, 235, 0.1)'};
  }
`;

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const userData = {
    subscription: {
      plan: "Premium",
      status: "active",
      nextBilling: "2024-04-15",
      price: "$19.99",
      period: "month"
    },
    usage: {
      deviceName: "Samsung Smart TV",
      lastActive: "2024-03-15 14:30",
      dataUsed: "45.2 GB",
      favoriteChannels: ["BBC One", "Sky Sports", "CNN"]
    },
    billing: {
      lastPayment: "2024-03-15",
      amount: "$19.99",
      method: "Visa ending in 4242",
      nextBilling: "2024-04-15"
    }
  };

  return (
    <DashboardContainer>
      <TabContainer>
        <TabButtons>
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </TabButton>
          <TabButton 
            active={activeTab === 'devices'} 
            onClick={() => setActiveTab('devices')}
          >
            Devices
          </TabButton>
          <TabButton 
            active={activeTab === 'billing'} 
            onClick={() => setActiveTab('billing')}
          >
            Billing
          </TabButton>
        </TabButtons>
      </TabContainer>

      {activeTab === 'overview' && (
        <DashboardGrid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Subscription Status</Title>
            <List>
              <ListItem>
                Plan: <Value>{userData.subscription.plan}</Value>
              </ListItem>
              <ListItem>
                Status: <StatusBadge active={userData.subscription.status === 'active'}>
                  {userData.subscription.status.toUpperCase()}
                </StatusBadge>
              </ListItem>
              <ListItem>
                Next Billing: <Value>{userData.subscription.nextBilling}</Value>
              </ListItem>
              <ListItem>
                Price: <Value>{userData.subscription.price}/{userData.subscription.period}</Value>
              </ListItem>
            </List>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Manage Subscription
            </Button>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Title>Current Device</Title>
            <List>
              <ListItem>
                Device: <Value>{userData.usage.deviceName}</Value>
              </ListItem>
              <ListItem>
                Last Active: <Value>{userData.usage.lastActive}</Value>
              </ListItem>
              <ListItem>
                Data Used: <Value>{userData.usage.dataUsed}</Value>
              </ListItem>
            </List>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Change Device
            </Button>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title>Favorite Channels</Title>
            <List>
              {userData.usage.favoriteChannels.map((channel, index) => (
                <ListItem key={index}>
                  {channel}
                </ListItem>
              ))}
            </List>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Channels
            </Button>
          </Card>
        </DashboardGrid>
      )}

      {activeTab === 'devices' && (
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Connected Device</Title>
          <List>
            <ListItem>
              Current Device: <Value>{userData.usage.deviceName}</Value>
            </ListItem>
            <ListItem>
              Last Active: <Value>{userData.usage.lastActive}</Value>
            </ListItem>
            <ListItem>
              Status: <StatusBadge active={true}>CONNECTED</StatusBadge>
            </ListItem>
          </List>
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Disconnect Device
          </Button>
        </Card>
      )}

      {activeTab === 'billing' && (
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Billing Information</Title>
          <List>
            <ListItem>
              Last Payment: <Value>{userData.billing.lastPayment}</Value>
            </ListItem>
            <ListItem>
              Amount: <Value>{userData.billing.amount}</Value>
            </ListItem>
            <ListItem>
              Payment Method: <Value>{userData.billing.method}</Value>
            </ListItem>
            <ListItem>
              Next Billing: <Value>{userData.billing.nextBilling}</Value>
            </ListItem>
          </List>
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Update Payment Method
          </Button>
        </Card>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
