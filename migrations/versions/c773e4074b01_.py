"""empty message

Revision ID: c773e4074b01
Revises: d99df0c2397c
Create Date: 2021-10-16 22:50:17.792300

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c773e4074b01'
down_revision = 'd99df0c2397c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'encomiendas', ['id_package'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'encomiendas', type_='unique')
    # ### end Alembic commands ###
